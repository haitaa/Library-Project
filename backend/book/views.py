from rest_framework import generics, serializers

from .models import Book
from .serializers import BookSerializer

class BookListCreateAPIView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def perform_create(self, serializer):
        author = self.request.user
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        pages = serializer.validated_data.get('pages')
        if serializer.is_valid(raise_exception=True):
            if content is None:
                content = title
            serializer.save(author=author)
        

book_list_view = BookListCreateAPIView.as_view()

class BookDetailAPIView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = "id"
    
book_detail_view = BookDetailAPIView.as_view()


class BookUpdateAPIView(generics.UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = "id"

    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.content:
            instance.content = instance.title

book_update_view = BookUpdateAPIView.as_view()


class BookDestroyAPIView(generics.DestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = "id"

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

book_delete_view = BookDestroyAPIView.as_view()
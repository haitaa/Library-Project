from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    def create_user(self, first_name, last_name, username, email, password=None):
        if not email:
            raise ValueError('User must have an email address!')
        
        if not username:
            raise ValueError('User must have an username!')
        
        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, first_name, last_name, username, email, password=None):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    class Genders(models.TextChoices):
        MALE = "male", _('Male'),
        FEMALE = "female", _("Female"),
        OTHER = "other", _("Other"),
        NOT_PROVIDED = "Not Provided", _("Not Provided")
    
    class Roles(models.TextChoices):
        USER = "user", _("User")
        AUTHOR = "author", _("Author")

    tcNo = models.CharField(max_length=11, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username= models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    age = models.CharField(max_length=3)
    roles = models.TextField(max_length=30, choices=Roles.choices, default=Roles.USER)
    gender = models.TextField(
        max_length=15, 
        choices=Genders.choices, 
        default=Genders.NOT_PROVIDED
    )

    # required fields
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]

    objects = UserManager()

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _

# Create your models here.

class CustomUserModel(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique = True, max_length=255)
    first_name = models.CharField(_("first_name"), max_length = 100)
    last_name = models.CharField(_("last_name"), max_length = 100, null = True, blank = True)
    is_active = models.BooleanField(default = True)     
    is_staff = models.BooleanField(default = False)
    date_joined = models.DateTimeField(auto_now_add = True)
    last_login = models.DateTimeField(auto_now = True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ['first_name']


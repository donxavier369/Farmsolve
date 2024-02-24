from django.contrib.auth.models import BaseUserManager
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _ 

class CustomUserManager(BaseUserManager):
    def email_validation(self, email):
        try:
            validate_email(email)
        except:
            raise ValidationError(_("you must provide a valid email"))
    
    def create_user(self, email, first_name, last_name=None, password=None, **extra_fields):
        if not email:
            raise ValueError(_("this is required field"))
        else:
            self.email_validation(email)
            clean_email = self.normalize_email(email)
        if not first_name:
            raise ValueError(_("this is required field"))
        
        user = self.model(
            email = clean_email,
            first_name = first_name,
            last_name = last_name,
            **extra_fields
        )

        user.set_password(password)
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault("is_staff", False)
        user.save()
        return user
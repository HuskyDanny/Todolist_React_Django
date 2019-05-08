from django.db import models
from datetime import datetime

# Create your models here.


class Todolist(models.Model):

    body = models.TextField()
    checked = models.BooleanField(default=False)

    def __str__(self):
        return self.body

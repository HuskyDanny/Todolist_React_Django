from .models import Todolist
from rest_framework import viewsets
from .seriailizer import TodolistSerializer
from django.shortcuts import render


class TodolistView(viewsets.ModelViewSet):
    queryset = Todolist.objects.all()

    serializer_class = TodolistSerializer

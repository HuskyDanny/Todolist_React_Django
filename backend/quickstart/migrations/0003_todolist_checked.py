# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-08 19:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0002_auto_20190507_1821'),
    ]

    operations = [
        migrations.AddField(
            model_name='todolist',
            name='checked',
            field=models.BooleanField(default=False),
        ),
    ]

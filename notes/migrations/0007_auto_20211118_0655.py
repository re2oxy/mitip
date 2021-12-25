# Generated by Django 3.2.9 on 2021-11-18 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0006_auto_20210606_1602'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=200, verbose_name='Текст')),
                ('type', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Task',
                'verbose_name_plural': 'Tasks',
            },
        ),
        migrations.AddField(
            model_name='todo',
            name='prio',
            field=models.CharField(default=1, max_length=50, verbose_name='Тип задачи'),
            preserve_default=False,
        ),
    ]
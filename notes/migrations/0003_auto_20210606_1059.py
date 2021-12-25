# Generated by Django 3.2.4 on 2021-06-06 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_legends'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=50, verbose_name='Текст')),
                ('legid', models.CharField(max_length=50, verbose_name='ID легенды')),
            ],
            options={
                'verbose_name': 'Todo',
                'verbose_name_plural': 'Todos',
            },
        ),
        migrations.AlterModelOptions(
            name='legends',
            options={'verbose_name': 'Легенды', 'verbose_name_plural': 'Легенда'},
        ),
        migrations.AlterField(
            model_name='legends',
            name='name',
            field=models.CharField(max_length=50, verbose_name='Имя'),
        ),
    ]
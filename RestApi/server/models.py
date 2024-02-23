from django.db import models
from django.contrib.auth.models import User

#TODO: Model fields - ['type','description','address','image','features','number']
#TODO: Add image field
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Pet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,blank=True)
    image_url = models.FileField(upload_to=upload_to, blank=True, null=True)
    description = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    features = models.CharField(max_length=100)
    number = models.CharField(max_length=25)

    def __str__(self):
        return self.name

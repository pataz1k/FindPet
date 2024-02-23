from rest_framework import serializers
from django.contrib.auth.models import User
from server.models import Pet

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']

class PetSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Pet
        fields = ['id','user','image_url','description','address','features','number']


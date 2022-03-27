from re import template
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    
]

#Django rest framework returning '403 Forbidden' when accessed through react frontend
# Apparently being logged into the admin page causes this 
#just lod out and you will be fine
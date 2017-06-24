from django.shortcuts import render

# Create your views here.

def tournaments(request):
    return render(request, 'tournaments.html',)
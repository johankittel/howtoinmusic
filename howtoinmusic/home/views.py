from django.shortcuts import render


def index(request):
    return render(request, 'home/home.html')

# def org(request):
# 	return render(request, 'home/org.html')

# def search_artist(request):
# 	return render(request, 'home/includes/search.html')
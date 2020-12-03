import requests
from django.shortcuts import render, redirect, get_object_or_404
from .models import Movie, MovieComment
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from .forms import MovieCommentForm

# Create your views here.
def getdata(request):

    # https://api.themoviedb.org/3/movie/popular?api_key=c786a622d66f3b488b2035f1808f07d7&language=ko-kr&page=1
    if request.user.is_superuser:
        url = 'https://api.themoviedb.org/3/movie/popular'

        for page in range(1, 6):
            payload = {
                'api_key': 'c786a622d66f3b488b2035f1808f07d7',
                'language': 'ko-kr',
                'page': page,
            }

            response = requests.get(url, params=payload)
            movies_dict = response.json()
            # print(movies_dict['results'][0]['title'])
            for i in range(len(movies_dict['results'])):
                movie = Movie()
                result = movies_dict['results'][i]

                movie.popularity = result['popularity']
                movie.vote_count = result['vote_count']
                movie.video = result['video']
                movie.poster_path = result['poster_path']
                movie.original_language = result['original_language']
                movie.original_title = result['original_title']
                movie.genre_ids = result['genre_ids']
                movie.title = result['title']
                movie.vote_average = result['vote_average']
                movie.overview = result['overview']
                movie.release_date = result['release_date']

                movie.save()
                
    return redirect('movies:index')


def index(request):
    movies = Movie.objects.all()
    context = {
        'movies': movies,
    }
    return render(request, 'movies/index.html', context)


@require_GET
def detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    movie_comment_form = MovieCommentForm()
    movie_comments = movie.moviecomment_set.all()
    context = {
        'movie': movie,
        'movie_comment_form': movie_comment_form,
        'movie_comments': movie_comments,
    }
    return render(request, 'movies/detail.html', context)


@require_POST
def movie_create_comment(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    movie_comment_form = MovieCommentForm(request.POST)
    if movie_comment_form.is_valid():
        movie_comment = movie_comment_form.save(commit=False)
        movie_comment.movie = movie
        movie_comment.user = request.user
        movie_comment.save()
        return redirect('movies:detail', movie.pk)

    context = {
        'movie': movie,
        'movie_comment_form': movie_comment_form,
    }
    return render(request, 'movies:detail.html', context)


@require_POST
def movie_delete_comment(request, movie_pk, comment_pk):
    movie_comment = get_object_or_404(MovieComment, pk=comment_pk)
    movie_comment.delete()
    return redirect('movies:detail', movie_pk)

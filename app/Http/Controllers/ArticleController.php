<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleCollection;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ArticleCollection
     */
    public function index()
    {
        return new ArticleCollection(
            Article::query()
                ->with('author')
                ->select(['id', 'title', 'author_id'])
                ->orderBy('id')
                ->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ArticleRequest $request
     * @param $rules
     * @return mixed
     */
    public function store(ArticleRequest $request)
    {
        $article = new Article();
        $article->title = $request->input('title');
        $article->text = $request->input('text');
        $article->author_id = $request->input('author_id');
        $article->save();
        return response()->json([
            'data' => [
                'message' => 'Статья успешно создана',
                'article' => new ArticleResource($article)
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return ArticleResource
     */
    public function show(Article $article)
    {
        return new ArticleResource($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(ArticleRequest $request, Article $article)
    {
        $article->title = $request->input('title');
        $article->text = $request->input('text');
        $article->author_id = $request->input('author_id');
        $article->save();
        return response()->json([
           'message' => 'Статья успешно обновлена',
           'article' => new ArticleResource($article),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json([
            'message' => 'Статья успешно удалена',
            'article' => new ArticleResource($article),
        ]);
    }
}

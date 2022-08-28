<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthorRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
   */
  public function index()
  {
    return AuthorResource::collection(Author::all());
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\AuthorRequest $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(AuthorRequest $request)
  {
    $author = new Author();
    $author->full_name = $request->full_name;
    if ($author->save()) {
      return response()->json([
        'data' => [
          'message' => 'Автор успешно создана',
          'article' => new AuthorResource($author)
        ]
      ]);
    } else {
      return response()->json([
        'message' => 'Ошибка во время создания автора',
      ], 422);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param \App\Models\Author $author
   * @return AuthorResource
   */
  public function show(Author $author)
  {
    return new AuthorResource($author);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\AuthorRequest $request
   * @param \App\Models\Author $author
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(AuthorRequest $request, Author $author)
  {
    $author->full_name = $request->full_name;
    $author->save();
    if ($author->save()) {
      return response()->json([
        'message' => 'Автор успешно обновлена',
        'article' => new AuthorResource($author),
      ]);
    } else {
      return response()->json([
        'message' => 'Ошибка во время обновления автора',
      ], 422);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param \App\Models\Author $author
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy(Author $author)
  {
    if ($author->delete()) {
      return response()->json([
        'message' => 'Статья успешно удалена',
        'article' => new AuthorResource($author),
      ]);
    } else {
      return response()->json([
        'message' => 'Ошибка во время удаления автора',
      ], 422);
    }

  }
}

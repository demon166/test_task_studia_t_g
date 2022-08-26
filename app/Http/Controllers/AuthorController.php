<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthorRequest;
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
     * @param  \Illuminate\Http\AuthorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AuthorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function show(Author $author)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\AuthorRequest  $request
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function update(AuthorRequest $request, Author $author)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Author $author)
    {
      if ($author->delete()){
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

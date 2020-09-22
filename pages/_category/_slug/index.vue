<template>
  <div>
    <h1>Categoria: {{$route.params.category}}</h1>
    <hr />
    <h1>Slug é {{$route.params.slug}}</h1>
  </div>
</template>

<script>
export default {
  layout: "public"
};
</script>

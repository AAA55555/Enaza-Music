<template>
  <div class="container mt-6">
    <p class="is-size-1 has-text-centered mb-6">404</p>
    <h1 class="box has-background-grey-dark">
      К сожалению запрашиваемая Вами страница не найдена. Возможно ссылка, по которой вы сюда попали, устарела, или Вы ошиблись, набирая адрес.
    </h1>
    <nuxt-link to="/" class="is-size-6">Перейти на главную</nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'AppError',
}
</script>

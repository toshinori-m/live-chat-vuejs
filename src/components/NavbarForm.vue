<template>
  <nav>
    <div>
      <p>こんにちは、XXさん</p>
      <p class="email">現在、....@...comでログイン中です</p>
    </div>
    <button>ログアウト</button>
  </nav>
</template>

<script>
</script>


<style scoped>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>
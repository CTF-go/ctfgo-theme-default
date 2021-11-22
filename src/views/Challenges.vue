<template>
    <div class="challenges">
        <h1>{{ category }}</h1>
        <div class="center">
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
        </div>
    </div>
</template>

<script>
import ChallengeCard from '../components/ChallengeCard'

export default {
    components:{ ChallengeCard },
    data:() => ({
        category: $route.params.category.toUpperCase()
    })
}
</script>


<style scoped>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
}
.challenges{
    margin-top: 84px;
}
h1 {
  color: #24292e;
  font-size: 5rem;
  font-weight: normal;
  line-height: 48px;
  margin: 0 0 50px;
  text-align: center;
  text-shadow: 1px 1px 2px #082b34;
  user-select: none;
}
</style>
<template>
    <div class="challenges">
        <h1>Challenges</h1>
        <ChallengeBar />
        <div class="cards">
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
        </div>
    </div>
</template>

<script>
import ChallengeBar from '../components/ChallengeBar'
import ChallengeCard from '../components/ChallengeCard'

export default {
    components:{ ChallengeCard, ChallengeBar }
}
</script>


<style scoped>
.challenges{
    margin-top: 84px;
}
.cards{
    margin-left: 184px;
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
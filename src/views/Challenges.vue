<template>
    <div class="challenges">
        <h1>{{ category.toUpperCase() }}</h1>
        <div class="center">
            <vs-row :key="index" :data="row" v-for="row,index in Math.ceil(challenges.length/4)">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"></vs-col>
                <vs-col :key="index" v-for="col,index in Math.min(4, challenges.length-(row-1)*4)" vs-type="flex" vs-justify="center" vs-align="center" w="2">
                    <ChallengeCard 
                        @reloadChallenges="getChallenges"
                        :id="challenges[4*(row-1)+col-1].id"
                        :name="challenges[4*(row-1)+col-1].name"
                        :score="challenges[4*(row-1)+col-1].score"
                        :description="challenges[4*(row-1)+col-1].description"
                        :isSolved="challenges[4*(row-1)+col-1].is_solved"
                        :solverCount="challenges[4*(row-1)+col-1].solver_count"
                        :attachment="challenges[4*(row-1)+col-1].attachment"
                        :hints="challenges[4*(row-1)+col-1].hints"
                    />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"></vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>
import ChallengeCard from '../components/ChallengeCard'

export default {
    components:{ ChallengeCard },
    data:() => ({
        category: null,
        challenges: [
            {
                id: 1,
                name: 'challenge name',
                score: 500,
                description: 'description',
                is_solved: false,
                solver_count: 1,
                attachment: [
                    "https://baidu.com"
                ],
                hints:["hint1", "hint2"]
            }
        ]
    }),
    methods:{
        setCategory(){
            this.category = this.$route.params.category;
        },
        reload() {
            this.setCategory();
            this.getChallenges();
        },
        async getChallenges(){
            const {data: result} = await this.$http.get('/user/challenges/'+this.category)
            if (result.code == 200 && result.data != null){
                this.challenges = result.data;
            }else{
                this.challenges = [];
            }
        }
    },
    created(){
        this.setCategory();
        this.getChallenges();
    }
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
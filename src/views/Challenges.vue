<template>
    <div class="challenges">
        <h1>{{ category.toUpperCase() }}</h1>
        <div class="center">
            <vs-row :key="index" :data="row" v-for="row,index in Math.ceil(challenges.length/4)">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"></vs-col>
                <vs-col :key="index" v-for="col,index in Math.min(4, challenges.length-(row-1)*4)" vs-type="flex" vs-justify="center" vs-align="center" w="2">
                    <ChallengeCard 
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
        category: 'None',
        challenges: [
            {
                id: 1,
                name: 'very very very long challenge name test',
                score: 500,
                description: 'long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>long<br>',
                is_solved:1,
                solver_count: 1,
                attachment: [
                    "https://baidu.com",
                    "http://file.com",
                    "https://baidu.com"
                ],
                hints:["there is hint1", "there is hint2",]
            },
            {
                id: 2,
                name: 'image in description test',
                score: 300,
                is_solved:0,
                description: '',
                solver_count: 0,
                attachment: [
                    "https://baidu.com",
                    "http://file.com",
                    "https://baidu.com",
                    "https://baidu.com",
                ],
            },
            {
                id: 2,
                name: 'image in description test',
                score: 300,
                description: '<img src="https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="img">',
                solver_count: 0
            },
            {
                id: 2,
                name: 'image in description test',
                score: 300,
                description: '<img src="https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="img">',
                solver_count: 0
            },
            {
                id: 2,
                name: 'image in description test',
                score: 300,
                description: '<img src="https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="img">',
                solver_count: 0
            },
            {
                id: 2,
                name: 'image in description test',
                score: 300,
                description: '<img src="https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="img">',
                solver_count: 0
            }
        ]
    }),
    methods:{
        setCategory(){
            this.category = this.$route.params.category;
        },
        async getChallenges(){
            const {data: result} = await this.$http.get('/user/challenges/'+this.category)
            if (result.code == 200){
                this.challenges = result.data;
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
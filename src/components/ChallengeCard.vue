<template>
    <div class="center">
        <vs-button flat class="card"
            :active="active != active"
            @click="active =! active">
            <h2>Challenge</h2>
        </vs-button>
        <vs-dialog width="300px" not-center v-model="active">
            <template #header>
            <h2 class="not-margin">
                {{ name }}
            </h2>
            <p class="not-margin">{{ details }}</p>
            
            </template>


            <div class="con-content">
            <vs-input v-model="inputflag" placeholder="flag{******}"></vs-input>
            </div>

            <template #footer>
            <div class="con-footer">
                <vs-button @click="active=false" transparent>
                Submit
                </vs-button>
                <vs-button @click="active=false" dark transparent>
                Cancel
                </vs-button>
            </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
export default {
    props: {
        name: {type: String, default: 'Challenge Name'},
        details: {type:String, default: 'Challenge details, more information of a challenge...'},
        apiurl: {type: String, default: '/challenges/submit/1'}
    },
    data: function (){
        return {
            active: false,
            inputflag: ''
        }
    }
}
</script>


<style scoped>
.card{
    width: 160px;
    height: 100px;
}
</style>

<style lang="stylus">
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .con-footer
    display flex
    align-items center
    justify-content flex-end
    .vs-button
      margin 0px
      .vs-button__content
        padding 10px 30px
      ~ .vs-button
        margin-left 10px
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
    padding-bottom 0px
  .con-content
    width 100%
    p
      font-size .8rem
      padding 0px 10px
    .vs-checkbox-label
      font-size .8rem
    .vs-input-parent
      width 100%
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
</style>


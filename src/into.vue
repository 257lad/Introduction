<template lang="html">
    <div>
        <h1>Hello word!</h1>
        <h2>I am {{ username }}</h2>

        <div v-for="people in peoples" :key="people.id" class="contact-card">
            <img :src="people.avatar" alt="" :title="people.name">
            <div class="descri">
                <h3>{{ people.name }}</h3>
                <div class="btns">
                    <button>⭐</button>
                    <button @click="callee = people.name">📞 </button>
                </div>
            </div>
        </div>

        <CallingPopUp v-if="callee" :callee="callee" @close="callee = ''" />

        <!-- <div v-else></div> -->

        <!-- <div>{ callee && <CallingPopUp callee={callee} closeFun={()=> setCallee('')} /> }</div> -->
    </div>
</template>

<script>
import CallingPopUp from './components/CallingPopUp.vue';
export default {
    components: {
        CallingPopUp
    },
    data() {
        return {
            username: 'John Doe',

            callee: '',

            peoples: [
                {
                    id: 1,
                    name: "John Doe",
                    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
                },
                {
                    id: 2,
                    name: "Emma Watson",
                    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
                },
                {
                    id: 3,
                    name: "Michael Brown",
                    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
                },
                {
                    id: 4,
                    name: "Sophia Johnson",
                    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
                }
            ]
        }
    },

}
</script>

<style lang="css">
.contact-card {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 300px;
    background-color: rgb(233, 233, 233);
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;


    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 5px;
    }

    .descri {
        flex: 1;

        .btns {
            width: 100%;


            button {
                margin-right: 10px;
                width: 40%;
            }
        }
    }


    h3 {
        margin: 0;
        padding: 0;
        margin-bottom: 5px;
    }
}

.calling {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.37);

    .caller {
        padding: 20px 40px;
        border-radius: 20px;
        background-color: white;
    }
}
</style>
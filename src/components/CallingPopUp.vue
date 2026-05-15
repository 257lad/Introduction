<template>
    <div class="calling" @click="$emit('close')" v-if="callee != null">
        <div class="caller">
            <img :src="callee?.avatar" :alt="callee?.name" class="caller-avatar" />
            <h3>{{ callee?.name }}</h3>
            <p class="subtitle">{{ callee?.subtitle }}</p>
            <!-- <div class="pulse"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     callee: {
    //         // type: Object,
    //         required: true,
            //    default: {}
    //     }
    // }
    props: ['callee']
}
</script>

<style scoped>
.calling {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
    cursor: pointer;
}

.caller {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 100%);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 32px;
    padding: 3rem 2rem;
    text-align: center;
    max-width: 340px;
    box-shadow: 0 60px 100px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    animation: slideUp 300ms ease-out;
}

.caller-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(56, 189, 248, 0.5);
    margin-bottom: 1.5rem;
    box-shadow: 0 0 40px rgba(56, 189, 248, 0.3);
}

.caller h3 {
    margin: 0 0 0.5rem;
    font-size: 1.75rem;
    color: #e2e8f0;
    font-weight: 600;
}

.subtitle {
    margin: 0 0 1.5rem;
    color: #94a3b8;
    font-size: 0.95rem;
}

.pulse {
    width: 100px;
    height: 100px;
    border: 2px solid rgba(56, 189, 248, 0.6);
    border-radius: 50%;
    margin: 1.5rem auto 0;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>
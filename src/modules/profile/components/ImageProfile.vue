<template>
    <div class="ImageProfile">
        <div class="container-img" >
            <label for="imageFile" id="imageFileLabel">Escolher Imagem</label>
            <input
                type="file"
                name="file"
                id="imageFile"
                accept="image/jpeg, image/png"
                ref="myFiles"
                @change="readImage(event, this.file)">
            <img :src="userImage" alt="Image Profile" id="preview">
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
    name: "ImageProfile",
    data() {
        return {
            newImage: ''
        }
    },
    computed: {
        ...mapState({
            userImage: state => state.auth.profileImage,
        })
    }
}
</script>

<style scoped>

    .ImageProfile {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
    }

    .container-img {
        width: 150px;
        height: 140px;
        margin: 10px;
        border: 3px solid #eee;
        border-radius: 50%;
        transition: .5s;

        position: relative;
        display: flex;
        align-items: center;
    }

    #imageFileLabel {
        position: absolute;
        bottom: 0;
        color: transparent;
    }

    #imageFileLabel:hover {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #fff;
        
        width: 100%;
        height: 50%; /* as the half of the width */
        background-color: rgba(0, 0, 0, 0.746);
        border-bottom-left-radius: 110px;  /* 100px of height + 10px of border */
        border-bottom-right-radius: 110px; /* 100px of height + 10px of border */
        border: 10px solid transparent;
        border-top: 0;
    }

    input[type="file"] {
        display: none;
    }

    .container-img img {
        width: 100%;
        max-width: 200px;
        height: 100%;
        max-height: 200px;
        border-radius: 50%;
    }

</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Camera component emits photoCaptured -->
      <CameraComponent @photoCaptured="addPhoto" />

      <!-- Gallery displays the photos -->
      <PhotoGalleryComponent :photos="photos" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { ref } from "vue";
import CameraComponent from "@/components/CameraComponentts.vue";
import PhotoGalleryComponent from "@/components/PhotoGalleryComponent.vue";

const photos = ref<string[]>([]);

const addPhoto = (photo: string) => {
  photos.value.unshift(photo); // newest photo appears first
};
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Photo Gallery</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div v-if="photos.length === 0" class="empty-gallery">
        <p>No pictures yet.</p>
        <p>Take a picture using the camera.</p>
      </div>
      <ion-grid v-else>
        <ion-row>
          <ion-col
            v-for="(photo, index) in photos"
            :key="index"
            size="6"
            size-md="4"
          >
            <ion-card>
              <ion-img :src="photo" class="gallery-image" />
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/vue";

defineProps<{ photos: string[] }>();
</script>

<style scoped>
:host {
  display: block;
}

ion-card {
  margin: 0;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(31, 41, 55, 0.1);
  overflow: hidden;
}

ion-card-header {
  padding: 20px 22px 14px;
  background: linear-gradient(135deg, #f8fbff, #eef5ff);
}

ion-card-title {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 700;
}

ion-card-content {
  padding: 18px;
}

ion-grid {
  padding: 0;
}

ion-row {
  margin: -6px;
}

ion-col {
  padding: 6px;
}

ion-col ion-card {
  border: 1px solid #e8eef7;
  box-shadow: 0 5px 16px rgba(31, 41, 55, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

ion-col ion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(31, 41, 55, 0.14);
}

.empty-gallery {
  text-align: center;
  padding: 42px 20px;
  border: 1px dashed #cbd5e1;
  border-radius: 14px;
  background: #f8fafc;
  color: #64748b;
}

.empty-gallery p {
  margin: 6px 0;
}

.empty-gallery p:first-child {
  color: #334155;
  font-size: 1.05rem;
  font-weight: 600;
}

.gallery-image {
  width: 100%;
  height: 180px;
  display: block;
  background: #f1f5f9;
}

.gallery-image::part(image) {
  object-fit: cover;
  transition: transform 0.3s ease;
}

ion-col ion-card:hover .gallery-image::part(image) {
  transform: scale(1.04);
}
</style>

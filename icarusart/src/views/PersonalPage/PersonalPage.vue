<template>
  <div class="animate__animated animate__fadeIn personal">
    <div class="banner" :style="{ backgroundImage: `url(${bannerBackground})` }">
      <div class="bannerCoverMask">
        <div class="uploadContainer">
          <el-upload class="uploadBanner" action="fakeaction" :drag="true" :show-file-list="false"
            :on-error="handleAvatarError" list-type="picture" ref="imgupload" :http-request="uploadImgUseFormData"
            :before-upload="beforeAvatarUpload" accept=".jpg,.png,.jpeg,.gif,.JPG,.PNG,.JPEG,.GIF">
            <div class="uploadInLayer">
              <svg t="1664387253805" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="5686" width="120" height="120">
                <path d="M448 320m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#ffffff" p-id="5687"></path>
                <path
                  d="M928 659.2l-130.133333-115.2c-14.933333-14.933333-38.4-14.933333-55.466667 0l-136.533333 113.066667c-8.533333 8.533333-10.666667 21.333333-2.133334 29.866666l27.733334 32c8.533333 8.533333 21.333333 10.666667 29.866666 2.133334l66.133334-55.466667V874.666667c0 12.8 8.533333 21.333333 21.333333 21.333333h42.666667c12.8 0 21.333333-8.533333 21.333333-21.333333v-204.8l57.6 51.2c8.533333 8.533333 21.333333 6.4 29.866667-2.133334l27.733333-32c10.666667-6.4 8.533333-19.2 0-27.733333z"
                  fill="#ffffff" p-id="5688"></path>
                <path
                  d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h320c12.8 0 21.333333-8.533333 21.333334-21.333333v-42.666667c0-12.8-8.533333-21.333333-21.333334-21.333333H256c-23.466667 0-42.666667-19.2-42.666667-42.666667v-189.866667l162.133334-102.4 151.466666 110.933334c14.933333 10.666667 34.133333 10.666667 49.066667 0l234.666667-166.4V490.666667c0 12.8 8.533333 21.333333 21.333333 21.333333h42.666667c12.8 0 21.333333-8.533333 21.333333-21.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333zM554.666667 499.2l-151.466667-108.8c-14.933333-10.666667-32-10.666667-46.933333-2.133333L213.333333 477.866667V256c0-23.466667 19.2-42.666667 42.666667-42.666667h512c23.466667 0 42.666667 19.2 42.666667 42.666667v57.6l-256 185.6z"
                  fill="#ffffff" p-id="5689"></path>
              </svg>
              <div class="tips">
                {{ $t('singleCollection.previewIntro') }}
              </div>
            </div>
            <div class="uploadImgContainer">
              <img :src="imgUrl" alt="">
            </div>
          </el-upload>
        </div>
        <div class="saveBtn" @click="savePhoto">Save photo</div>
      </div>
      <div class="banner__footer__bar">
        <div class="coverPhoto" @click="editCoverPhoto">
          Edit Cover Photo
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="editProfile" @click="editProfile">
          Edit Profile
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V13"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 16L10 13L15.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 19H19M22 19H19M19 19V16M19 19V22" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
    <div class="mainContent">
      <div class="user">
        <div class="user__avatar">
          <img :src="userAvatar" alt="Avatar" />
        </div>
        <div class="user__name">{{userName}}</div>
        <div class="user__code">
          <div class="user__number">{{ userAddress }}</div>
          <svg class="icon icon-copy" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="followingsAndFollowers">
          <a class="following">
            <span class="num">{{followings}}&nbsp;</span><span class="text">Following</span>
          </a>
          <a class="follower">
            <span class="num">{{followers}}&nbsp;</span><span class="text">Follower</span>
          </a>
        </div>
        <div class="user__info">
          {{description}}
        </div>
        <a class="user__site" href="https://ui8.net" target="_blank">
          <svg t="1652671017661" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2721" width="16" height="16">
            <path
              d="M854.4 800.9c0.2-0.3 0.5-0.6 0.7-0.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-0.2-0.3-0.5-0.5-0.7-0.8-1.1-1.3-2.1-2.5-3.2-3.7-0.4-0.5-0.8-0.9-1.2-1.4-1.4-1.6-2.7-3.1-4.1-4.7l-0.1-0.1c-1.5-1.7-3.1-3.4-4.6-5.1l-0.1-0.1c-3.2-3.4-6.4-6.8-9.7-10.1l-0.1-0.1-4.8-4.8-0.3-0.3c-1.5-1.5-3-2.9-4.5-4.3-0.5-0.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-0.3-0.3-0.7-0.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-0.3 0.3-0.7 0.6-1 1-1 0.9-2 1.9-3 2.9-0.5 0.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-0.3 0.3-4.8 4.8-0.1 0.1c-3.3 3.3-6.5 6.7-9.7 10.1l-0.1 0.1c-1.6 1.7-3.1 3.4-4.6 5.1l-0.1 0.1c-1.4 1.5-2.8 3.1-4.1 4.7-0.4 0.5-0.8 0.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-0.2 0.3-0.5 0.5-0.7 0.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c0.2 0.3 0.5 0.6 0.7 0.9 1 1.2 2.1 2.5 3.1 3.7 0.4 0.5 0.8 0.9 1.2 1.4 1.4 1.6 2.7 3.1 4.1 4.7 0 0.1 0.1 0.1 0.1 0.2 1.5 1.7 3 3.4 4.6 5l0.1 0.1c3.2 3.4 6.4 6.8 9.6 10.1l0.1 0.1c1.6 1.6 3.1 3.2 4.7 4.7l0.3 0.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2c3.4-3.1 6.7-6.3 10-9.6l0.3-0.3c1.6-1.6 3.2-3.1 4.7-4.7l0.1-0.1c3.3-3.3 6.5-6.7 9.6-10.1l0.1-0.1c1.5-1.7 3.1-3.3 4.6-5 0-0.1 0.1-0.1 0.1-0.2 1.4-1.5 2.8-3.1 4.1-4.7 0.4-0.5 0.8-0.9 1.2-1.4 1.2-1.3 2.3-2.5 3.3-3.7z m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2-24.9-21.5-52.2-40.3-81.5-55.9 11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9 22.2 27.4 40.4 57.6 54.2 90.2C874.4 403.4 884 443.1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2-18.5 15.8-38.4 29.7-59.4 41.8-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4z m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697c39.9 2.8 78.6 11.6 115.7 26.2-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1z m59-633.1c11 20.6 20.7 43.3 29 67.8-37.1 14.6-75.8 23.4-115.7 26.2V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-0.3 1.2c-41.1-15.6-85.1-25.3-130.9-28.1z m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l0.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540z m-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-0.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484z m-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l0.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1z m0-370c-39.9-2.8-78.6-11.6-115.7-26.2 8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6-29.3 15.6-56.6 34.4-81.5 55.9-22.2-27.4-40.4-57.6-54.2-90.2C149.6 620.6 140 580.9 137 540z m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4z m292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8-31.8 29.2-67.9 52.4-107.6 69.2z"
              p-id="2722"></path>
          </svg>{{personal_url}}</a>
        <div class="user__control" v-if="getUserAddress !== userAddressInRouter">
          <el-button>Follow</el-button>
        </div>
        <div class="user__socials">
          <a class="user__social" :href="twitter_url" target="_blank">
            <svg t="1652672289809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="3528" width="20" height="20">
              <path
                d="M104.746667 825.088C173.994667 870.186667 275.797333 896 384 896c303.232 0 464.213333-239.104 469.205333-479.104l79.829334-139.690667a42.666667 42.666667 0 0 0-58.837334-57.813333c-13.184 7.850667-43.306667 11.306667-67.456 14.08-6.314667 0.768-12.544 1.450667-18.56 2.261333a200.874667 200.874667 0 0 0-128.981333-47.232 200.448 200.448 0 0 0-199.765333 189.056c-98.816-18.944-195.114667-73.898667-255.658667-148.48a42.368 42.368 0 0 0-39.04-15.317333 42.410667 42.410667 0 0 0-33.28 25.472c-47.104 109.909333-71.253333 338.773333 148.48 460.885333-29.610667 35.754667-66.048 43.776-114.389333 43.776-7.509333 0-14.976 0.896-22.357334 2.005334-3.242667 0.469333-6.485333 1.066667-10.112 1.066666h-0.085333a43.008 43.008 0 0 0-45.141333 27.818667 42.666667 42.666667 0 0 0 16.896 50.304zM191.445333 338.517333c86.485333 75.562667 204.544 125.098667 318.421334 130.773334 13.056 0.469333 26.325333-5.034667 34.901333-15.317334a42.666667 42.666667 0 0 0 8.704-37.162666 165.802667 165.802667 0 0 0-5.461333-17.536 149.930667 149.930667 0 0 1-3.541334-10.624 114.901333 114.901333 0 0 1 114.688-114.858667c31.573333 0 62.122667 13.312 83.84 36.437333a42.368 42.368 0 0 0 39.338667 12.714667c8.533333-1.664 18.346667-2.858667 28.586667-4.096l-37.333334 65.322667A43.221333 43.221333 0 0 0 768 405.333333c0 162.901333-102.229333 405.333333-384 405.333334-33.408 0-65.877333-2.730667-96.341333-7.978667 34.005333-18.56 66.133333-49.536 91.818666-100.949333a42.624 42.624 0 0 0-21.376-58.282667C180.778667 567.466667 176.256 422.954667 191.445333 338.517333z"
                fill="" p-id="3529"></path>
            </svg></a><a class="user__social" :href="instagram_url" target="_blank">
            <svg t="1652672320410" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4434" width="20" height="20">
              <path
                d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9z m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zM725.5 250.7c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9c-0.1-26.6-21.4-47.9-47.9-47.9z"
                p-id="4435"></path>
              <path
                d="M911.8 512c0-55.2 0.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-0.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-0.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9 0.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165z m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                p-id="4436"></path>
            </svg></a><a class="user__social" :href="facebook_url" target="_blank">
            <svg t="1652672389801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="8608" width="20" height="20">
              <path
                d="M554.666667 850.688A341.376 341.376 0 0 0 512 170.666667a341.333333 341.333333 0 0 0-42.666667 680.021333V597.333333H384v-85.333333h85.333333v-70.570667c0-57.045333 5.973333-77.738667 17.066667-98.602666A116.309333 116.309333 0 0 1 534.869333 294.4c16.298667-8.746667 36.565333-13.994667 71.978667-16.256 14.037333-0.896 32.213333 0.213333 54.528 3.413333v81.066667H640c-39.125333 0-55.296 1.834667-64.938667 6.997333a31.018667 31.018667 0 0 0-13.397333 13.397334c-5.12 9.642667-6.997333 19.2-6.997333 58.368V512h106.666666l-21.333333 85.333333h-85.333333v253.354667zM512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z"
                p-id="8609"></path>
            </svg></a>
        </div>
        <div class="user__note">{{sinceTime}}</div>
      </div>
      <div class="collectionsContainer">
        <div class="sort">
          <button class="created" @click="select('Created')">Created</button>
          <button class="collected" @click="select('Collected')">Collected</button>
          <div class="firstSelect">
            <el-select v-model="firstSortValue" class="m-2" placeholder="拥有" size="large"
              popper-class="sortBarInPersonal">
              <el-option v-for="item in firstOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="secondSelect">
            <el-select v-model="secondSortValue" class="m-2" placeholder="全部" size="large"
              popper-class="sortBarInPersonal">
              <el-option v-for="item in secondOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>

        </div>
        <div class="btns">
          <ConditionButtons :selectCreatedOrCollected="selectCreatedOrCollected"
            @changeSelectCreatedOrCollected="changeSelectCreatedOrCollected" @receiveFromBtns="btnValue" />
        </div>
        <PersonalItems />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import ConditionButtons from '../../components/ConditionButtons/ConditionButtons';
import PersonalItems from "../../components/PersonalItems/PersonalItems.vue";
import Footer from "../../components/Footer/Footer.vue";
import "animate.css";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getUserInfoSameToTm } from '../../api/api'
const tmURL = 'https://www.tingmuseum.art/api/'
const router = useRouter();
const store = useStore();
var bannerBackground = ref(require('../../assets/images/4.gif'))
const firstSortValue = ref("");
const secondSortValue = ref("");
const userAddress = computed(() => store.state.walletAddress.slice(0, 10) + '...' + store.state.walletAddress.slice(35, store.state.walletAddress.length))
const getUserAddress = ref('')
const userAddressInRouter = ref('')
const file = ref('')
const imgUrl = ref('')
const selectCreatedOrCollected = ref('') //改变created或者collected按钮的状态，同时要改变4个按钮的状态
const selectedBtn = ref("");
const followings = ref(0);
const followers = ref(0)
const userName = ref('icaa user')
const twitter_url = ref('')
const facebook_url = ref('')
const instagram_url = ref('')
const userAvatar = ref(require('../../assets/images/1.gif'))
const description = ref('')
const personal_url = ref('')
const sinceTime = ref('')
const imgType = ref([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/PNG",
  "image/JPG",
  "image/JPEG",
  "image/gif",
  "image/GIF",
])
const firstOptions = ref([
  {
    value: "暂不出售",
    label: "暂不出售",
  },
  {
    value: "拍卖中",
    label: "拍卖中",
  },
  {
    value: "暂不拍卖",
    label: "暂不拍卖",
  },
  {
    value: "出售中",
    label: "出售中",
  },
]);
const secondOptions = ref([
  {
    value: "最新",
    label: "最新",
  },
  {
    value: "最早",
    label: "最早",
  },
  {
    value: "上周",
    label: "上周",
  },
  {
    value: "上月",
    label: "上月",
  },
]);
watch(() => selectCreatedOrCollected.value, (newValue) => {
  if (newValue == '') {
    $('.created').removeClass('active')
    $('.collected').removeClass('active')
  }
})
function changeSelectCreatedOrCollected(selectedValueFromConditionButtons) {
  selectCreatedOrCollected.value = selectedValueFromConditionButtons;
}
function btnValue(value) {
  selectedBtn.value = value;
}
function select(selected) {
  if (selected == 'Created') {
    selectCreatedOrCollected.value = 'Created'
    $('.created').addClass('active')
    $('.collected').removeClass('active')
  } else {
    selectCreatedOrCollected.value = 'Collected'
    $('.created').removeClass('active')
    $('.collected').addClass('active')
  }
}
/**
 * *获取用户的信息
 */
async function getUserInfo() {
  userAddressInRouter.value = router.currentRoute.value.query.address;
  const address = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (address.length !== 0) {
    // 获取用户信息
    const result = await getUserInfoSameToTm(address[0]);
    getUserAddress.value = address[0]
    console.log('result:', result);
    bannerBackground.value = tmURL + result.data.image_coverpage
    userAvatar.value = tmURL + result.data.image_avatar
    description.value = result.data.description
    facebook_url.value = result.data.facebook_url
    twitter_url.value = result.data.twitter_url
    instagram_url.value = result.data.instagram_url
    personal_url.value = result.data.personal_url
    userName.value = result.data.username
    sinceTime.value = result.data.since_time
  }
}
onMounted(() => {
  getUserInfo();
})

// 上传图片(使用formData)
async function uploadImgUseFormData(params) {
  console.log('params:', params)
  file.value = params.file;
  getBase64(params.file).then((res) => {
    imgUrl.value = res;
    console.log('imgUrl:', imgUrl.value)
  });
}
// 转换格式,将图片转化为base64格式的
function getBase64(file) {
  return new Promise((resolve, reject) => {
    // console.log(file)
    let reader = new FileReader();
    let fileResult = "";
    reader.readAsDataURL(file); //开始转
    reader.onload = function () {
      fileResult = reader.result;
    }; //转 失败
    reader.onerror = function (error) {
      reject(error);
    }; //转 结束  咱就 resolve 出去
    reader.onloadend = function () {
      resolve(fileResult);
    };
  });
}
// 上传文件判断
function beforeAvatarUpload(file) {
  console.log('file:', file)
  return new Promise((resolve, reject) => {
    // 调用testFileType方法，把定义的imgType数组和我们上传的图片类型file.type一起传进去
    var isTYPE;
    testFileType(imgType.value, file.type, (data) => {
      isTYPE = data;
    });
    const isLt10M = file.size / 1024 / 1024 < 1000000000000;

    if (!isTYPE) {
      ElMessage({
        title: '上传格式有误',
        type: "error",
      });
      return reject(false);
    } else if (!isLt10M) {
      ElMessage({
        title: '请上传小于10M的图片或者视频',
        type: "error",
      });
      return reject(false);
    } else {
      return resolve(true);
    }
  });
}
// 判断文件类型是否在数组中 返回布尔值
function testFileType(arr, fileType, callback) {
  arr.filter((el, index) => {
    if (fileType === el) {
      // console.log(fileType === el)
      callback(fileType === el);
    }
  });
}
function handleAvatarError(res, file) {
  imgupload.value.clearFiles();
}
/**
 * 更改个人资料
 */
function editProfile() {
  router.push({
    path: '/profile',
    query: {
      address: getUserAddress.value
    }
  })
}
/**
 * 更改banner图
 */
function editCoverPhoto() {
  $('.bannerCoverMask').toggleClass('active')
  $('.editProfile').hide();
  $('.coverPhoto').hide();
}
/**
 * 保存coverPhoto的修改
 */
function savePhoto() {
  $('.bannerCoverMask').toggleClass('active')
  $('.editProfile').show();
  $('.coverPhoto').show();
  imgUrl.value = '';
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/PersonalPage.less");
</style>
<style lang="less">
.uploadBanner {
  width: 100%;
  height: 100%;

  & .el-upload {
    width: 100% !important;
    height: 100% !important;
    position: relative;
    z-index: 9999;

    & .el-upload-dragger {
      width: 100% !important;
      height: 100% !important;
      background-color: rgba(0, 0, 0, 0);
      border: none !important;

      & .uploadInLayer {
        width: 50%;
        height: 50%;
        margin: 0 auto;
        color: #fff;

        & .tips {
          font-family: 'AlegreyaSansSC-ExtraBold';
          font-size: 30px;
        }
      }

      & .uploadImgContainer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

.sortBarInPersonal {
  border-radius: 12px !important;
  box-shadow: 0px 0px 6px 0px #f0f0f0;
  padding: 0 !important;
  background: #fcfcfd;

  & .sort {
    list-style: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    & li {
      transition: all ease 0.3s;
      cursor: pointer;
      font-family: "Arial Narrow Regular";
      font-size: 1rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 10px 14px;
      color: #828ea0;

      & svg {
        margin-right: 8px;
      }

      &:hover {
        color: #165bbf;
        background-color: #f4f5f9;
      }
    }

    & li:first-child {
      border-radius: 8px 8px 0 0 !important;
    }

    & li:last-child {
      border-radius: 0 0 8px 8px !important;
    }
  }
}
</style>

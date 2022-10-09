<template>
  <div class="multi animate__animated animate__fadeIn">
    <div class="multiContainer">
      <div class="title">
        <h1>{{ $t('multiCollection.create') }}</h1>
        <h3>{{ $t('multiCollection.titleIntro') }}</h3>
      </div>
      <div class="center">
        <div class="leftDetailAndLine">
          <div class="leftDetail">
            <div class="nameContainer">
              <h4>{{ $t('multiCollection.canvas') }}</h4>
              <h5>{{ $t('multiCollection.canvasName') }}</h5>
              <div class="name">
                <input type="text" :placeholder="colName" v-model="canvasName">
              </div>
            </div>
            <div class="description">
              <h5>{{ $t('multiCollection.canvasIntro') }}</h5>
              <textarea :placeholder="colDescription" v-model="canvasIntro"></textarea>
            </div>
            <div class="canvasSize">
              <h5>{{ $t('multiCollection.canvasSize') }}</h5>
              <div class="sizeContainer">
                <div class="left">
                  <input type="text" placeholder="0" v-model="canvasSizeLeft">
                </div>
                <div class="plus">X</div>
                <div class="right">
                  <input type="text" placeholder="0" v-model="canvasSizeRight">
                </div>
              </div>
            </div>
            <ul class="layers" v-if="showLayer">
              <li v-for="(item, index) in layers" :key="index">
                <div class="title">
                  <div class="layer">
                    {{ $t('multiCollection.layer') + ' ' + (index + 1) }}
                  </div>
                  <div class="delete" @click="deleteLayer(index)">
                    {{ $t('multiCollection.delete') }}
                  </div>
                </div>
                <div class="layerNameContainer">
                  <h5>{{ $t('multiCollection.layerName') }}</h5>
                  <div class="name">
                    <input type="text" :placeholder="colName" v-model="item.layerName">
                  </div>
                </div>
                <div class="layerDescription">
                  <h5>{{ $t('multiCollection.layerIntro') }}</h5>
                  <textarea :placeholder="colDescription" v-model="item.layerIntro"></textarea>
                </div>
                <div class="addImg">
                  <h5>{{ $t('multiCollection.addImage') + ' ' }} <span v-if="index == 0">({{ $t('multiCollection.tip')
                  }})</span></h5>
                  <div class="layerUploadContainer">
                    <el-upload @click="currentClickLayer(index)" class="upload-demo-layer" action="fakeaction"
                      :drag="true" :show-file-list="false" :on-success="handleAvatarSuccess"
                      :on-error="handleAvatarError" list-type="picture" ref="imgupload"
                      :http-request="uploadImgUseFormData" :before-upload="beforeAvatarUpload"
                      accept=".jpg,.png,.jpeg,.gif,.JPG,.PNG,.JPEG,.GIF">
                      <div class="uploadInLayer" v-show="item.showTipsOrUploadContainer">
                        <div class="tips">
                          {{ $t('singleCollection.previewIntro') }}
                        </div>
                      </div>
                      <div class="uploadImgContainer" v-show="!item.showTipsOrUploadContainer">
                        <img :src="item.layerImgUrl !== '' ? item.layerImgUrl : ''" alt=""
                          v-if="item.layerImgUrl.startsWith('data:image')">
                      </div>
                    </el-upload>
                  </div>
                </div>
              </li>
            </ul>
            <div class="add">
              <h4>{{ $t('multiCollection.addLayer') }}</h4>
              <div class="addLayer" @click="addLayer">
                <img src="../../assets/images/add.svg" alt="">
              </div>
            </div>





          </div>
          <div class="dashLine">

          </div>
        </div>
        <div class="uploadContainer">
          <h4>{{ $t('multiCollection.preview') }}</h4>
          <div class="upload-demo">
            <div class="upload">
              <div class="tips" v-show="showUploadOrImgContainer">
                {{ $t('multiCollection.layerUploadIntro') }}
              </div>
              <ul class="uploadImgContainer" v-show="!showUploadOrImgContainer">
                <li v-for="(item, index) in layers" :key="index">
                  <img :src="item.layerImgUrl !== '' ? item.layerImgUrl : ''" alt=""
                    v-if="item.layerImgUrl.startsWith('data:image')">
                </li>
              </ul>
            </div>

          </div>

          <div class="btnContainer">
            <div class="mint">
              {{ $t('multiCollection.mint') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch, nextTick } from "vue";
import Footer from "../../components/Footer/Footer.vue";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";
import 'animate.css'
const layerNumber = ref(1);
const { t } = useI18n();
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
const file = ref('')
const imgUrl = ref('')
const colName = computed(() => t('multiCollection.canvasNameInput'))
const colDescription = computed(() => t('multiCollection.canvasIntroInput'))
const canvasName = ref('')
const canvasIntro = ref('')
const canvasSizeLeft = ref('')
const canvasSizeRight = ref('')
const imgupload = ref(null)
const showUploadOrImgContainer = ref(true) // 控制tips显示与否
const currentClickingLayer = ref(1);
const canvas = ref([
  {
    canvasName: '',
    canvasIntro: '',
    canvasSizeLeft: 0,
    canvasSizeRight: 0
  }
])
const layers = ref([
  {
    layerName: '',
    layerIntro: '',
    layerImgUrl: '',
    showTipsOrUploadContainer: true,
  },
])
const showLayer = ref(true); // 用来显示图层的，图层数组长度大于等于1时显示，图层数组长度等于0的时候隐藏
function currentClickLayer(index) {
  currentClickingLayer.value = index;
}
function addLayer() {
  showLayer.value = true;
  layers.value.push({
    layerName: 'layer-' + Number(layers.value.length + 1),
    layerIntro: '',
    layerImgUrl: '',
    showTipsOrUploadContainer: true
  })
  nextTick(() => {
    if (document.body.scrollHeight > window.innerHeight) {
      $('.multi').css({ height: '100%' })
    } else {
      $('.multi').css({ height: '100vh' })
    }
  })
}
function deleteLayer(index) {
  layers.value.splice(index, 1);
  if (layers.value.length == 0) {
    showLayer.value = false;
    showUploadOrImgContainer.value = true;
  }
  nextTick(() => {
    if (document.body.scrollHeight > window.innerHeight) {
      $('.multi').css({ height: '100%' })
    } else {
      $('.multi').css({ height: '100vh' })
    }
  })
}
// 上传图片(使用formData)
async function uploadImgUseFormData(params) {
  console.log('params:', params)
  file.value = params.file;
  getBase64(params.file).then((res) => {
    imgUrl.value = res;
    layers.value[currentClickingLayer.value].layerImgUrl = res;
    for (let i in layers.value) {
      if (i == currentClickingLayer.value) {
        layers.value[i].showTipsOrUploadContainer = false
      } else {
        if (layers.value[i].layerImgUrl == '') {
          layers.value[i].showTipsOrUploadContainer = true
        } else {
          layers.value[i].showTipsOrUploadContainer = false
        }
      }
    }
    console.log('imgUrl:', imgUrl.value)
    showUploadOrImgContainer.value = false;
  });
}
function handleAvatarSuccess(res, file) {
  // console.log('item:', item)
  console.log('sldkf')
  // getBase64(file.value).then((res) => {
  //   item.layerImgUrl = res;
  //   console.log('item.layerImgUrl:', item.layerImgUrl)
  // });
}
function handleAvatarError(res, file) {
  imgupload.value.clearFiles();
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
  // imgupload.value.clearFiles();

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
</script>

<style lang="less" scoped>
@import url('../../assets/Style/Multi.less');
</style>
<style lang="less" scoped>
@import url('../../assets/Style/Single.less');
</style>
<style lang="less">
.upload-demo-layer {
  width: 100%;
  height: 86%;
  border-radius: 12px;
  background-color: #fcfbfd;
  box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 30%);



  & .el-upload {
    width: 100%;
    height: 100%;
    user-select: none;


    & .el-upload-dragger {
      width: 100%;
      height: 100%;
      border: none !important;
      padding: 0;

      & .uploadInLayer {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: #fcfbfd;
        box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 30%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9195a1;

        & .tips {
          width: 80%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
      }

      & .uploadImgContainer {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: #fcfbfd;
        box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 30%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all ease .3s;

        &:hover {
          & .closeImgOrVideo {
            transition: all ease .3s;

            display: block;
          }
        }

        & .closeImgOrVideo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .3);
          transition: all ease .3s;
          display: none;

          & .svgContainer {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            transition: all ease .3s;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(39, 39, 39);

            &:hover {
              background-color: rgba(15, 15, 15, 0.94);
            }

          }

        }

        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        & video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>


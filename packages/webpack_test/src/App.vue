<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-09-26 16:25:25
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-27 15:02:24
-->
<template>
    <a-layout style="height: 100%; padding: 0 20px">
        <a-layout>
            <a-layout-content>
                <a-config-provider :locale="locale">
                    <template #renderEmpty>
                        <div style="text-align: center">
                            <img style="width: 100px" src="./assets/img/empty.png" alt="" />
                            <p>暂无数据</p>
                        </div>
                    </template>
                    <router-view />
                </a-config-provider>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { aFun } from '@work/common'
import initz from '@work/common/utils/index'

export default {
    setup() {
        // eslint-disable-line
        const locale = ref(zhCN)
        const xx = initz
        console.log(xx, 'ppppp')
        aFun()
        // const s = (x) => {
        //     return `${parseInt( ((100 - x) / 10) + '')+ 1} 等生`
        // }
        // console.log(s(88))
        return {
            locale
        }
    }
}
</script>

<style scoped lang="less">
.app-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .left-menu-wrap {
        width: 217px;
    }
    .router-view-wrap {
        flex: 2;
        height: 100%;
    }
}
</style>
<style lang="less">
#root {
    width: 100%;
    max-height: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    background-color: var(--neutral-color-3);
}
</style>

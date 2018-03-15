<template lang="html">
  <header class="header">
    <h1>Nuxt Bulma Example</h1>
    <div
      id="navMenuButton"
      ref="navMenuButton"
      aria-controls="navMenu"
      class="navbar-burger burger"
      :class="{'is-active': menuIsVisible}"
      aria-label="Button for mobile navigation menu"
      :aria-expanded="menuIsVisible"
      @keyup.enter.prevent="$store.commit('TOGGLE_MENU_STATE')"
      @click="$store.commit('TOGGLE_MENU_STATE')">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav
      class="header-nav"
      :class="{menuIsActive: menuIsVisible}"
      id="navMenu">
      <nuxt-link
        v-for="link in navLinks"
        :key="link.url"
        :to="link.url">{{link.title}}
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'site-header',
  data() {
    return {
      navLinks: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Posts',
          url: '/posts'
        }
      ]
    }
  },
  computed: mapState({
    menuIsVisible: 'menuIsOpen'
  })
}
</script>

<style lang="scss">
// #35495e
.header {
  height: 54px;
  background: darkgray;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  &-nav {
    a {
      margin: .25em 1em;
      color: white;
      font-weight: 600;
    }
    @media (max-width: 999px) {
      background: gray;
      color: white;
      padding: 1em;
      z-index: -1;
      position: absolute;
      top: 54px;
      // background: rgb(190, 190, 190);
      box-sizing: border-box;
      left: 0;
      right: 0;
      // transition: all .35s ease-in-out;
      transition: all .35s cubic-bezier(0.42, 0, 0.35, 0.7);
      transform: translateY(-100%);
      // background: white;
      text-align: left;
      &.menuIsActive {
        z-index: 9;
        transform: translateY(0%);
      }
      a {
        display: block;
        margin: 1em .25em;
      }
    }


  }
}

// .header-nav {
//   @media (max-width: 999px) {
//     z-index: -1;
//     position: absolute;
//     top: 54px;
//     background: rgb(190, 190, 190);
//     box-sizing: border-box;
//     left: 0;
//     right: 0;
//     // transition: all .35s ease-in-out;
//     transition: all .35s cubic-bezier(0.42, 0, 0.35, 0.7);
//     transform: translateY(-100%);
//     background: white;
//     z-index: 9;
//     text-align: left;
//     &.menuIsActive {
//       transform: translateY(0%);
//     }
//   }
// }
</style>

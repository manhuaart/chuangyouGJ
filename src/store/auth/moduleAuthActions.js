/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'

export default {
    loginAttempt({ dispatch }, payload) {

        // New payload for login action
        const newPayload = {
            userDetails: payload.userDetails,
            notify: payload.notify
        }

        // 如果启用了“记住我”，请更改firebase持久性
        if (!payload.checkbox_remember_me) {

            // 更改firebase持续性
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

                // 如果成功，请尝试登录
                .then(function() {
                    dispatch('login', newPayload)
                })

                // 如果出错通知
                .catch(function(err) {
                    payload.notify({
                        time: 2500,
                        title: 'Error',
                        text: err.message,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
        } else {
            // 尝试登录
            dispatch('login', newPayload)
        }
    },
    login({ commit, state, dispatch }, payload) {

        // 如果用户已经登录，通知并退出
        if (state.isUserLoggedIn()) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }

        // Try to sigin
        firebase.auth().signInWithEmailAndPassword(payload.userDetails.email, payload.userDetails.password)

            .then((result) => {
  
                // 更新用户名需要设置标志用户名更新
                let isUsernameUpdateRequired = false;

                // 如果提供用户名且updateUsername标志为true
                  // 将本地用户名更新标志设置为true
                  // 尝试更新用户名
                if(payload.updateUsername && payload.userDetails.username) {

                    isUsernameUpdateRequired = true;

                    dispatch('updateUsername', {
                      user: result.user,
                      username: payload.userDetails.username,
                      notify: payload.notify,
                      isReloadRequired: true
                    })
                }

                // 如果不需要用户名更新
                  // 只需重新加载页面以获取新数据
                  // 在localstorage中设置新用户数据
                if(!isUsernameUpdateRequired) {
                  router.push(router.currentRoute.query.to || '/');
                  commit('UPDATE_AUTHENTICATED_USER', result.user.providerData[0])
                }
            }, (err) => {
                payload.notify({
                    time: 2500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
    },

    // Google 登录
    loginWithGoogle({commit, state}, payload) {
        if (state.isUserLoggedIn()) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                router.push(router.currentRoute.query.to || '/');
                commit('UPDATE_AUTHENTICATED_USER', result.user.providerData[0])
            }).catch((err) => {
                payload.notify({
                    time: 2500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         user.updateProfile({
        //             roles: ['admin'],
        //         }).then(function() {
        //             this.$vs.notify({
        //                 title: 'Success',
        //                 text: "done",
        //                 iconPack: 'feather',
        //                 icon: 'icon-check',
        //                 color: 'success'
        //             });
        //         }, function(error) {
        //             this.$vs.notify({
        //                 title: 'Error',
        //                 text: error.message,
        //                 iconPack: 'feather',
        //                 icon: 'icon-alert-circle',
        //                 color: 'danger'
        //             });
        //         });

        //     }
        // });
    },

    // Facebook Login
    loginWithFacebook({commit, state}, payload) {
        if (state.isUserLoggedIn()) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                router.push(router.currentRoute.query.to || '/');
                commit('UPDATE_AUTHENTICATED_USER', result.user.providerData[0])
            }).catch((err) => {
                payload.notify({
                    time: 2500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
    },

    // Twitter Login
    loginWithTwitter({commit, state}, payload) {
        if (state.isUserLoggedIn()) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }
        const provider = new firebase.auth.TwitterAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                router.push(router.currentRoute.query.to || '/');
                commit('UPDATE_AUTHENTICATED_USER', result.user.providerData[0])
            }).catch((err) => {
                payload.notify({
                    time: 2500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
    },

    // Github Login
    loginWithGithub({commit, state}, payload) {
        if (state.isUserLoggedIn()) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }
        const provider = new firebase.auth.GithubAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                router.push(router.currentRoute.query.to || '/');
                commit('UPDATE_AUTHENTICATED_USER', result.user.providerData[0])
            }).catch((err) => {
                payload.notify({
                    time: 2500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
    },
    registerUser({dispatch}, payload) {

        // 使用firebase创建用户
        firebase.auth().createUserWithEmailAndPassword(payload.userDetails.email, payload.userDetails.password)
            .then(() => {
                payload.notify({
                    title: 'Account Created',
                    text: 'You are successfully registered!',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                });

                const newPayload = {
                    userDetails: payload.userDetails,
                    notify: payload.notify,
                    updateUsername: true
                }
                dispatch('login', newPayload)
            }, (error) => {
                payload.notify({
                    title: 'Error',
                    text: error.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })
    },
    updateUsername({ commit }, payload) {
        payload.user.updateProfile({
            displayName: payload.username
        }).then(() => {

            // If username update is success
              // update in localstorage
            let newUserData = Object.assign({}, payload.user.providerData[0])
            newUserData.displayName = payload.username
            commit('UPDATE_AUTHENTICATED_USER', newUserData)

            // If reload is required to get fresh data after update
              // Reload current page
            if(payload.isReloadRequired) {
                router.push(router.currentRoute.query.to || '/')
            }
        }).catch((err) => {
              payload.notify({
                time: 8800,
                title: 'Error',
                text: err.message,
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
            });
        })
    },
    updateAuthenticatedUser({ commit }, payload) {
        commit('UPDATE_AUTHENTICATED_USER', payload)
    }
}

import axios from "axios";

export default {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      axios({
        url: process.env.VUE_APP_LOGIN_URL,
        data: user,
        method: "POST"
      })
        .then(resp => {
          const token = resp.data.token;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          axios({
            url: `${process.env.VUE_APP_API_URL}/user`,
            data: user,
            method: "GET"
          }). then(res => {
            const user = res.data.user.username;
            const role = JSON.stringify(res.data.user.role).indexOf("ROLE_ADMIN");
            const is_admin = role > -1;
            localStorage.setItem("user", user);
            localStorage.setItem("is_admin", is_admin);
            commit("AUTH_SUCCESS", token, user);
          });
          resolve(resp);
        })
        .catch(err => {
          commit("AUTH_ERROR");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("LOGOUT");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
      if (reject) {
        throw reject;
      }
    });
  }
};

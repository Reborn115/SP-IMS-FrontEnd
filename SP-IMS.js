var v1 = new Vue({
  el: "#app1",
  methods: {
    handleClick(row) {
      console.log(row);
    },



    async getDate(pageNum) {
      const { data: res } = await axios({
        method: "get",
        url: "http://43.143.162.177:8089/get/programList",
        params: {
          pageNum,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res)
      res.data.forEach((item) => {
        item.actorList = this.changeArrToStr(item.actorList);
      });

      this.tableData = res.data;
    },
    changeArrToStr(arr) {
      let newArr = [];
      arr.forEach((item) => newArr.push(item.name));
      return newArr.join(",");
    },
    pageChange(pageNum) {
      console.log(pageNum);
      if (pageNum <= 0) {
        return;
      } else {
        this.getDate(pageNum);
      }
    },
  },
  data() {
    return {
      tableData: [],
      pageNum: 1,
    };
  },
  created() {
    this.getDate(this.pageNum);
  },
});






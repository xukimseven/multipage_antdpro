const GlobalTools = {
  /**
   * 获取随机数
   *  a<=n<=b 范围内随机数
   */
  randomNumBoth(Min, Max) {
    const Range = Max - Min;
    const Rand = Math.random();
    return Min + Math.round(Rand * Range); //四舍五入
  },
};

export default GlobalTools;

import useCoins from "./useCoins";
import useSubmissions from "./useSubmissions";

const useTotalCoins = () => {
  const { userCoins, isLoading: loadingCoins } = useCoins();

  const { totalEarningCoins, isLoading: loadingEarningCoins } =
    useSubmissions();

  const totalCoins = userCoins + totalEarningCoins;

  const isLoading = loadingCoins || loadingEarningCoins;

  return { userCoins, totalEarningCoins, totalCoins, isLoading };
};

export default useTotalCoins;

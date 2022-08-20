import { createSlice, PayloadActionCreator } from '@reduxjs/toolkit'; 
export type selectedFiltersType = {
  loanPurpose: boolean;
  loanType: boolean;
  loanAmount: boolean;
  channel: boolean;
  amortizationType: boolean;
  amortizationTerm: boolean;
  rcs: boolean;
  dti: boolean;
  ltv: boolean;
  customerAge: boolean;
  firstTimeHomebuyer: boolean;
  occupancyType: boolean;
  propertyType: boolean;
};
const selectedFilters: selectedFiltersType = {
  loanPurpose: false,
  loanType: false,
  loanAmount: false,
  channel: false,
  amortizationType: false,
  amortizationTerm: false,
  rcs: false,
  dti: false,
  ltv: false,
  customerAge: false,
  firstTimeHomebuyer: false,
  occupancyType: false,
  propertyType: false,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: selectedFilters as selectedFiltersType,
  reducers: {  
    selectedFilterAction: (state, action) => {
      return action.payload;
    },
  },
});
export const { selectedFilterAction } = filterSlice.actions;
export const { reducer } = filterSlice;












import {
  reducer as filterReducer,
  selectedFilterAction,
} from '../../../../data/filter';
import {
  useAppDispatch,
  useAppSelector,
  useInjectReducer,
} from '@elliemae/pui-app-sdk';

useInjectReducer({ key: 'filter', reducer: filterReducer });
  // const dispatch=useAppDispatch()
  const cardData = useAppSelector((state) => state.filter);

useEffect(() => {
    const selected = selectedValues.map(({ dsId }) => ({
      [dsId]: true,
    }));
    let newobj = {};
    for (let obj of selected) {
      // console.log('obj', obj);
      newobj[Object.keys(obj)] = Object.values(obj)[0];
    }
    console.log('selectedValues', newobj);
    dispatch(
      selectedFilterAction({
        ...cardData,
        ...newobj,
      }),
    );
  }, [selectedValues]);







import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@elliemae/pui-app-sdk';
import { reducer as scorecardReducer } from './scorecard';
import { reducer as userInfoReducer } from './user-info';
import { reducer as filterReducer } from './filter';

type AppState = RootState & {
  scorecard: ReturnType<typeof scorecardReducer>;
  userInfo: ReturnType<typeof userInfoReducer>;
  filter: ReturnType<typeof filterReducer>;
};

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;









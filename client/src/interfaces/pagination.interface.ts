export interface IPaginationProps {
  startingPage?: number;
  pageSize: number;
  totalRecords: number;
  onPageChanged: (paginationData: IPaginationData) => void;
}

export interface IPaginationState {
  currentPage: number;
  pageCount: number;
}

export interface IPaginationData {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
}

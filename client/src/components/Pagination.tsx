import { range, uniqueId } from 'lodash';
import * as React from 'react';
import { IPaginationProps, IPaginationState } from '../interfaces';

import '../styles/pagination.scss';

class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  constructor(props: IPaginationProps) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 1,
    };
  }

  componentDidMount() {
    const startingPage = this.props.startingPage || 1;
    const pageSize = this.props.pageSize;
    const pageCount = Math.ceil(this.props.totalRecords / pageSize);

    this.setState({
      currentPage: startingPage,
      pageCount,
    });
  }

  setCurrentPage = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  handlePageChange = (page: number) => (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const { onPageChanged } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.state.pageCount));

    const paginationData = {
      currentPage,
      totalPages: this.state.pageCount,
      pageLimit: this.props.pageSize,
      totalRecords: this.props.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  createControls() {
    const pageCount = this.state.pageCount;
    const numberOfPages = range(1, pageCount + 1);
    // console.log(numberOfPages, '>>>');
    // console.log(this.state, 'state >>>');
    return numberOfPages.map(pageNumber => {
      const baseClassName = 'pagination-controls__button';
      const activeClassName =
        pageNumber === this.state.currentPage ? `${baseClassName}--active` : '';
      return (
        <div
          key={uniqueId()}
          className={`${baseClassName} ${activeClassName}`}
          onClick={this.handlePageChange(pageNumber)}
        >
          {pageNumber}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination-controls">{this.createControls()}</div>
      </div>
    );
  }
}

export default Pagination;

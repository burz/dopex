import styled, { keyframes } from 'styled-components';


const colorTransition = keyframes`
  from { background: rgba(204, 0, 0, 0.3); }
  to { background: white; }
`;

export const StrikeTableStyles = styled.div`
  table {
    // border: 1px solid #CCCCCC;
  }

  thead {
    background: #56BEEC;
    color: white;

    th {
      font-weight: 500;
      padding-left: 15px !important;
      padding-right: 15px !important;

      &.th-ad {
        min-width: 214px;
      }

      &.th-air-time {
        width: 15%
      }

      &.th-title {
        width: 40%;
      }

      &.th-brand {
        width: 12%;
      }

      &.th-station-logo {
        width: 8%;
      }

      &.th-station {
        width: 15%;
      }

      &.viewership-col i {
        padding-right: 5px;
        cursor: pointer;
      }
    }
  }

  tbody {
    background: #F9F9F9;
    .new-airing {
      background-color: rgba(204, 0, 0, 0.2);
      &:hover {
        background-color: rgba(204, 0, 0, 0.5);
      }
    }

    tr {
      transition: background-color 0.3s ease;
    }

    td {
      vertical-align: middle !important;
      padding: 15px !important;

      &.td-video {
        position: relative;
        padding: 0 !important;
        max-width: 214px;

        .td-video-wrapper {
          max-width: 214px;
          position: relative;
        }

        .td-video-overlay {
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: black;
          top: 0;
          left: 0;
          opacity: 0.2;
          transition: opacity 0.3s ease;
          &:hover {
            opacity: 0.0;
            cursor: pointer;
          }
        }

        img {
          height: 100px;
          min-width: 213px;
        }
      }

      &.td-air-time {
        width: 15%
      }

      &.td-title {
        font-weight: 600;
        width: 40%;
      }

      &.td-brand {
        width: 12%;
      }

      &.td-station-logo {
        width: 8%;

        .td-station-img {
          width: 70%;
          height: auto;
          display: block;
          filter: grayscale(100%);
        }
      }

      &.td-station {
        width: 15%;
      }
    }
  }

  @media (max-width: 991px) {
    .td-station, .th-station {
      display: none;
    }
  }
`;

export default StrikeTableStyles;

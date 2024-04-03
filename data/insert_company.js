import * as fs from 'fs';
import * as mysql from 'mysql';
import * as config from './database-config.constant.js';
import csv from 'csv-parser';

const URL = config.getURL();

// MySQL 연결 정보 설정
const connection = mysql.createConnection(URL);

// CSV 파일 경로
const csvFilePath = process.cwd() + '/data/unique_company.csv';

// CSV 파일을 MySQL 테이블에 삽입하는 함수
function insertCsvDataToMysql() {
  // CSV 파일을 읽기 위한 스트림 생성
  const stream = fs.createReadStream(csvFilePath).pipe(csv());

  // 스트림에서 데이터를 읽을 때마다 실행되는 콜백 함수
  stream.on('data', async (data) => {
    // MySQL 테이블에 데이터를 삽입하는 쿼리 작성
    console.log(data);
    const query =
      'INSERT INTO company (name, address, longitude, latitude, scale, c_group) VALUES (?, ?, ?, ?, ?, ?)';
    // 쿼리 실행
    await connection.query(
      query,
      [
        data.company_name,
        data.company_address,
        data.longitude,
        data.latitude,
        data.company_scale,
        data.group,
      ],
      (error, results, fields) => {
        if (error) {
          console.error('An error occurred while inserting data:', error);
        }
      },
    );
  });

  // 모든 데이터가 삽입된 후에 실행되는 콜백 함수
  stream.on('end', () => {
    console.log('All data has been inserted into MySQL.');
    // MySQL 연결 종료
    connection.end();
  });
}

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL.');
  // CSV 데이터 삽입 시작
  insertCsvDataToMysql();
});
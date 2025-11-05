// Google Apps Script 코드
// 이 코드를 Google Apps Script 에디터에 붙여넣으세요

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('학생정보');
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({
      error: '학생정보 시트를 찾을 수 없습니다.'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const students = [];
  
  // 헤더를 제외한 데이터 처리
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    
    // 빈 행 건너뛰기
    if (!row[0] && !row[1]) continue;
    
    const student = {
      timestamp: row[0] || '',
      name: row[1] || '',
      githubId: row[2] || '',
      siteUrl: row[3] || `https://${row[2]}.github.io/`,
      group: row[4] || '미분류',
      thumbnail: row[5] || '',
      initial: (row[1] || '').charAt(0)
    };
    
    students.push(student);
  }
  
  const result = {
    students: students,
    count: students.length,
    lastUpdated: new Date().toISOString()
  };
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// 테스트용 함수
function test() {
  const result = doGet();
  Logger.log(result.getContent());
}

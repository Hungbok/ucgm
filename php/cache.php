// 주소 뒤에 자동으로 최종 수정일자를 붙여주는 소스
function get_url( $url ) {
    // URL이 비어있으면 리턴
    if(empty($url)) return $url;

    // URL 베이스경로를 가져온다.
    $base_URL = ($_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
    $base_URL .= ($_SERVER['SERVER_PORT'] != '80') ? $_SERVER['HTTP_HOST'].':'.$_SERVER['SERVER_PORT'] : $_SERVER['HTTP_HOST'];

    // 해당 URL이 베이스경로를 포함하고 있거나, 처음 시작이 / 이면서 // 이 아닐때 실행한다.
    if( strpos($url, $base_URL) !== FALSE OR ( substr($url,0,1) == '/' && substr($url,1,1) != '/' )
    {
        // 해당 파일이 실제로 존재할때만
        $absolute_url = $_SERVER['DOCUMENT_ROOT'] . str_replace($base_URL, "", $url);
        if( file_exist($_SERVER['DOCUMENT_ROOT'] . str_replace($base_URL, "", $url)) )
        {
             $url .= "?ver=".filemtime( $absolute_url ); 
        }
    }
    
    return $url;
}
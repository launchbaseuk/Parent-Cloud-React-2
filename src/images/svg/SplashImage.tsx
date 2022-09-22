import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SplashImage(props: any) {
  return (
    <Svg
      width={156}
      height={110}
      viewBox="0 0 156 110"
      fill="none"
      {...props}
    >
      <Path
        d="M13.916 53.993V22.007c0-.295.055-.535.166-.683.112-.148.334-.222.668-.222h11.006c1.464 0 2.817.277 4.095.813a10.127 10.127 0 013.336 2.254c.963.961 1.704 2.07 2.26 3.326a10.37 10.37 0 01.815 4.084c0 1.46-.278 2.809-.815 4.084a10.095 10.095 0 01-2.26 3.326 10.84 10.84 0 01-3.336 2.254 10.377 10.377 0 01-4.04.813H16.51v11.937c0 .277-.037.462-.13.591-.092.13-.278.185-.537.185h-1.186c-.334 0-.537-.055-.611-.185-.075-.11-.13-.314-.13-.591zm19.752-22.414a7.84 7.84 0 00-2.316-5.617 8.46 8.46 0 00-2.52-1.719 7.509 7.509 0 00-3.076-.628H16.51V39.58h9.246a7.509 7.509 0 003.076-.628 8.23 8.23 0 002.52-1.719 7.925 7.925 0 001.705-2.531 8.158 8.158 0 00.611-3.123zM60.777 33.5v20.548c0 .48-.26.72-.778.72h-1.094c-.333 0-.537-.055-.611-.184-.074-.13-.111-.333-.111-.628v-3.991c-.538 1.7-1.557 3.011-3.04 3.954-1.482.942-3.223 1.404-5.224 1.404-1.538 0-2.984-.295-4.318-.905a10.797 10.797 0 01-3.465-2.476 11.67 11.67 0 01-2.297-3.677c-.556-1.405-.834-2.92-.834-4.51 0-1.607.278-3.122.815-4.526a11.21 11.21 0 012.298-3.714A10.926 10.926 0 0145.6 33.02c1.334-.61 2.78-.905 4.318-.905 1 0 1.964.13 2.872.388a9.598 9.598 0 012.464 1.09 7.688 7.688 0 011.871 1.663c.52.628.871 1.349 1.094 2.125l.092-3.862c.038-.296.093-.536.186-.684.092-.147.296-.221.63-.221h.963c.445-.019.686.277.686.887zm-2.594 10.237c0-1.238-.204-2.402-.612-3.51a9.234 9.234 0 00-1.704-2.901 7.884 7.884 0 00-2.613-1.978c-1.02-.48-2.131-.72-3.335-.72-1.205 0-2.335.24-3.373.72a8.102 8.102 0 00-2.668 1.978 8.937 8.937 0 00-1.723 2.9 10.066 10.066 0 00-.612 3.511c0 1.238.204 2.403.63 3.493.426 1.09 1 2.032 1.76 2.864a8.89 8.89 0 002.632 1.959c1.019.48 2.13.72 3.335.72 1.204 0 2.335-.24 3.335-.702a7.734 7.734 0 002.613-1.922 9.053 9.053 0 001.705-2.864c.426-1.09.63-2.273.63-3.547zM66.484 53.993V33.63c0-.702.24-1.035.723-1.035h1.13c.278 0 .444.093.519.26.074.166.13.369.166.609l.037 2.495c.427-1.128 1.168-2.015 2.206-2.698 1.037-.684 2.297-1.017 3.761-1.017.667 0 1.408.13 2.26.37.834.24 1.501.536 2.02.905.148.148.297.333.464.573.148.222.148.462 0 .702l-.686.998a.648.648 0 01-.519.259c-.204-.019-.333-.056-.426-.111a8.097 8.097 0 00-1.5-.74 4.898 4.898 0 00-1.78-.332c-.852 0-1.63.203-2.316.592a6.27 6.27 0 00-1.816 1.533 6.839 6.839 0 00-1.204 2.2 7.552 7.552 0 00-.426 2.568v12.195c0 .536-.278.813-.816.813h-.963c-.556 0-.834-.258-.834-.776zM93.74 55.268c-1.519 0-2.945-.296-4.28-.906a10.927 10.927 0 01-3.483-2.494 11.683 11.683 0 01-2.316-3.696 12.061 12.061 0 01-.834-4.471c0-1.608.278-3.105.834-4.509a11.974 11.974 0 012.297-3.696 10.826 10.826 0 013.41-2.494c1.297-.61 2.705-.906 4.188-.906 1.426 0 2.76.296 4.02.887a10.595 10.595 0 013.299 2.403c.945 1.016 1.686 2.198 2.26 3.566a11.42 11.42 0 01.834 4.36c0 .537-.167.906-.5 1.09-.334.186-.76.278-1.279.278H85.458a8.26 8.26 0 00.778 3.141 8.695 8.695 0 001.798 2.55 8.489 8.489 0 002.575 1.719 8.302 8.302 0 003.095.683h.092a8.578 8.578 0 003.614-.776 9.75 9.75 0 002.927-2.032c.204-.204.426-.314.63-.314.204 0 .389.073.538.221l.537.776c.204.24.296.462.278.629-.037.184-.222.443-.593.776a13.794 13.794 0 01-3.632 2.365c-1.315.554-2.78.85-4.354.85zm-.277-20.64c-1 0-1.946.185-2.817.573-.87.37-1.667.905-2.371 1.57-.705.666-1.279 1.46-1.76 2.366a10.338 10.338 0 00-.983 2.993h15.824a8.661 8.661 0 00-.908-2.975 8.962 8.962 0 00-1.797-2.384 8.33 8.33 0 00-2.409-1.57 6.744 6.744 0 00-2.78-.573zM111.511 41.17v12.786c0 .277-.037.48-.13.61s-.278.203-.537.203h-1.186c-.297 0-.501-.074-.593-.203-.093-.13-.13-.333-.13-.61V33.168c0-.388.222-.591.686-.591h1.278c.241 0 .408.074.482.203.074.13.111.277.111.425l.056 2.827c.759-1.127 1.76-2.05 3.02-2.808s2.668-1.128 4.206-1.128c1.297 0 2.52.24 3.632.721a8.726 8.726 0 012.909 2.014 9.464 9.464 0 011.927 3.104c.463 1.202.704 2.532.704 3.955v11.974c0 .61-.241.905-.722.905h-1.186c-.334 0-.538-.074-.612-.203-.074-.13-.111-.351-.111-.665V41.354c0-.942-.185-1.81-.537-2.642-.371-.813-.853-1.534-1.483-2.144a6.588 6.588 0 00-2.168-1.423 6.614 6.614 0 00-2.631-.517c-.908 0-1.797.166-2.631.499a6.85 6.85 0 00-2.223 1.386 7.185 7.185 0 00-1.538 2.088 5.854 5.854 0 00-.593 2.568zM140.194 52.46h.871c.241 0 .463.036.667.092.204.055.297.258.297.591v1.183c0 .295-.112.498-.315.572a2.32 2.32 0 01-.779.111h-.685a8.74 8.74 0 01-2.131-.258 4.139 4.139 0 01-1.76-.924c-.501-.462-.89-1.072-1.168-1.867-.278-.794-.407-1.792-.407-3.03V34.998h-3.132c-.296 0-.519-.056-.667-.167-.13-.11-.204-.332-.204-.665v-.813c0-.333.074-.554.204-.665.13-.111.352-.167.667-.167h3.132v-6.707c0-.462.259-.702.778-.776l1.13-.185c.297-.055.5.018.593.222.093.203.13.462.13.72v6.708h3.965c.612 0 .908.296.908.868v.721c0 .573-.296.869-.908.869h-3.965v13.285c0 1.608.222 2.68.685 3.215.464.592 1.149.906 2.094.998z"
        fill="#156D78"
        stroke="#156D78"
        strokeWidth={0.739123}
        strokeMiterlimit={10}
      />
      <Path
        d="M76.12 81.304a.685.685 0 01.444-.185c.167-.019.296.055.408.222l.518.794c.112.185.149.333.112.425-.038.11-.149.203-.315.333-1.057.868-2.261 1.552-3.614 2.07-1.352.498-2.816.757-4.391.757a12.93 12.93 0 01-5.133-1.035c-1.612-.684-3.02-1.626-4.206-2.827-1.204-1.201-2.13-2.587-2.835-4.195a12.896 12.896 0 01-1.038-5.118c0-1.83.352-3.548 1.038-5.118a12.878 12.878 0 012.835-4.14 13.363 13.363 0 014.206-2.79c1.612-.683 3.317-1.016 5.133-1.016 1.593 0 3.057.259 4.391.758a13.245 13.245 0 013.67 2.07c.221.184.333.35.314.498-.018.148-.055.24-.074.296l-.593.757a.833.833 0 01-.296.167c-.149.073-.334.018-.538-.13-.963-.739-2.02-1.33-3.15-1.792-1.13-.462-2.371-.684-3.669-.684-1.538 0-2.983.296-4.354.869a11.807 11.807 0 00-3.576 2.402 11.386 11.386 0 00-2.428 3.566 10.602 10.602 0 00-.889 4.305c0 1.534.296 2.994.87 4.361a11.632 11.632 0 002.41 3.585 11.419 11.419 0 003.576 2.42c1.353.592 2.798.888 4.317.888 1.316 0 2.539-.222 3.706-.684 1.186-.499 2.224-1.09 3.15-1.83zM82.086 84.703v-24.28c0-.406.222-.628.648-.628h.723c.408 0 .63.203.63.628l-.037 24.299c0 .406-.204.628-.612.628h-.722c-.426-.018-.63-.24-.63-.647zM87.83 76.924c0-1.22.222-2.365.648-3.418a9.232 9.232 0 011.797-2.809 8.116 8.116 0 012.687-1.885c1.038-.462 2.168-.683 3.373-.683 1.223 0 2.353.221 3.39.683a8.48 8.48 0 012.706 1.885c.76.795 1.353 1.737 1.797 2.809.445 1.072.649 2.217.649 3.418 0 1.22-.223 2.365-.649 3.419a9.212 9.212 0 01-1.797 2.808 8.196 8.196 0 01-2.706 1.885c-1.037.462-2.186.684-3.39.684-1.223 0-2.354-.222-3.373-.684a8.391 8.391 0 01-2.687-1.885c-.76-.794-1.352-1.737-1.797-2.808-.445-1.054-.648-2.2-.648-3.419zm1.964 0c0 .943.166 1.83.5 2.661.334.832.797 1.57 1.371 2.18a6.51 6.51 0 002.094 1.479c.797.37 1.686.554 2.631.554.945 0 1.816-.185 2.631-.554.797-.37 1.501-.869 2.094-1.478.593-.61 1.038-1.35 1.371-2.18a7.071 7.071 0 00.501-2.662c0-.942-.167-1.83-.501-2.66a6.906 6.906 0 00-1.371-2.181 6.511 6.511 0 00-2.094-1.478c-.796-.37-1.686-.555-2.63-.555-.946 0-1.817.185-2.632.555-.797.37-1.5.868-2.094 1.478a6.503 6.503 0 00-1.371 2.18 7.08 7.08 0 00-.5 2.661zM107.675 78.643v-9.609c0-.37.167-.554.519-.554h.871c.259 0 .426.055.5.166.074.11.13.296.13.517v9.554c0 .72.129 1.367.407 1.977.278.61.649 1.127 1.13 1.589a6 6 0 001.668 1.072c.63.258 1.297.388 2.02.388.685 0 1.353-.13 1.983-.388a5.314 5.314 0 001.667-1.09 4.863 4.863 0 001.13-1.608c.278-.61.408-1.275.408-1.977v-9.572c0-.407.204-.628.63-.628h.723c.444 0 .648.203.648.628v15.577c0 .406-.222.628-.648.628h-.556c-.389 0-.612-.203-.649-.628l-.129-1.996a7.81 7.81 0 01-2.242 2.162c-.89.573-1.946.869-3.132.869a6.927 6.927 0 01-2.742-.555 7.042 7.042 0 01-2.261-1.515 7.014 7.014 0 01-1.519-2.254c-.371-.832-.556-1.755-.556-2.753zM141.158 60.479v24.114c0 .221-.037.406-.13.535-.074.13-.241.185-.5.185h-.723c-.445 0-.649-.24-.649-.72v-2.125c-.129.258-.352.554-.648.924-.297.37-.704.72-1.186 1.071-.5.351-1.112.629-1.834.869-.723.24-1.594.37-2.613.37-1.13 0-2.187-.222-3.169-.684a8.363 8.363 0 01-2.575-1.867 9.072 9.072 0 01-1.723-2.79c-.427-1.072-.63-2.199-.63-3.418 0-1.22.203-2.365.63-3.437.426-1.072 1-2.014 1.723-2.809a7.618 7.618 0 012.575-1.866c.982-.462 2.039-.684 3.169-.684 1.594 0 2.891.388 3.928 1.164a7.654 7.654 0 012.353 2.827V60.516c0-.462.223-.684.649-.684h.723c.259 0 .426.056.5.185.074.092.13.258.13.462zm-1.872 16.427a7.09 7.09 0 00-1.871-4.842 6.874 6.874 0 00-2.001-1.478 5.42 5.42 0 00-2.409-.554c-.853 0-1.649.185-2.409.554-.76.37-1.427.85-1.983 1.478a7.216 7.216 0 00-1.352 2.18 7.071 7.071 0 00-.501 2.662c0 .942.167 1.83.501 2.66.333.832.778 1.571 1.352 2.181a6.543 6.543 0 001.983 1.478c.76.37 1.556.555 2.409.555.852 0 1.649-.185 2.409-.555a6.56 6.56 0 002.001-1.478 7.09 7.09 0 001.871-4.841zM49.733 75.945a6.801 6.801 0 00.222-1.756c0-3.473-2.483-6.43-5.93-7.465-.018 0-.018-.018-.036-.037-.778-3.621-4.28-6.338-8.505-6.338-3.52 0-6.541 1.904-7.894 4.638 0 .019-.018.019-.037.019-2.78.647-5.04 2.513-6.003 4.933 0 .019-.019.019-.037.019-3.892.794-7.635 2.957-7.635 7.724 0 5.432 4.485 7.594 9.006 7.798.26 0 .963-.037 1.427-.573.37-.425.444-1.238.463-1.7V77.94a2.578 2.578 0 012.575-2.569h.352a2.578 2.578 0 012.576 2.569v5.266c.037.794.222 2.291 1.186 2.291 1 0 1.167-1.626 1.186-2.402v-8.39a3.175 3.175 0 013.168-3.159h.445a3.175 3.175 0 013.169 3.16v8.5c.037.794.203 2.291 1.186 2.291 1 0 1.167-1.7 1.185-2.513v-3.197a2.14 2.14 0 012.131-2.125h.39c1.167 0 2.13.961 2.13 2.125v2.513s.019 2.033.612 2.661c.426.444 1.093.37 1.297.333 1.834-.388 4.577-1.515 4.577-4.897.037-1.996-1.297-3.714-3.206-4.453zm-22.161-1.811a2.764 2.764 0 01-2.761-2.753 2.764 2.764 0 012.76-2.754c1.52 0 2.762 1.239 2.762 2.754a2.74 2.74 0 01-2.761 2.753zm8.523-3.788a3.368 3.368 0 01-3.372-3.363 3.368 3.368 0 013.372-3.363 3.368 3.368 0 013.373 3.363c0 1.848-1.501 3.363-3.373 3.363zm8.08 6.116a2.314 2.314 0 01-2.317-2.31 2.314 2.314 0 012.316-2.31 2.314 2.314 0 012.316 2.31 2.314 2.314 0 01-2.316 2.31zM60.232 96.918a.23.23 0 01-.158-.058.23.23 0 01-.058-.158V91.52c0-.067.02-.12.058-.158a.23.23 0 01.158-.057h1.437c.35 0 .66.076.928.23.273.153.486.366.64.64.152.268.23.577.23.927 0 .35-.078.66-.23.934a1.643 1.643 0 01-.64.64c-.269.153-.578.23-.928.23h-1.221v1.796a.23.23 0 01-.058.159.214.214 0 01-.158.057zm.216-2.444h1.221c.269 0 .504-.057.705-.172.206-.12.366-.283.481-.489.12-.206.18-.443.18-.711 0-.269-.06-.504-.18-.705a1.225 1.225 0 00-.481-.481 1.35 1.35 0 00-.705-.18h-1.221v2.738zm5.505 2.487c-.384 0-.729-.086-1.035-.259a1.988 1.988 0 01-.72-.718 2.06 2.06 0 01-.258-1.028c0-.383.086-.726.259-1.028.177-.306.417-.546.719-.719a2.03 2.03 0 011.034-.266c.384 0 .726.09 1.028.266.302.173.54.412.712.72.177.301.266.644.266 1.027l-.18.287c0 .326-.082.619-.244.877a1.743 1.743 0 01-.647.618 1.924 1.924 0 01-.934.223zm0-.402c.301 0 .57-.07.804-.209.24-.144.427-.335.561-.575.139-.244.208-.517.208-.82 0-.306-.069-.579-.208-.819a1.47 1.47 0 00-.56-.574 1.51 1.51 0 00-.805-.216c-.298 0-.566.072-.806.216-.24.139-.428.33-.567.575-.14.24-.209.512-.209.819 0 .302.07.575.209.82.139.239.328.43.567.574.24.14.508.209.805.209zm1.789.359a.23.23 0 01-.158-.058.23.23 0 01-.058-.158v-1.315l.137-.431h.295v1.746a.23.23 0 01-.058.159.214.214 0 01-.158.057zm1.435-2.4c.03-.307.113-.578.252-.813.139-.24.319-.426.539-.56.22-.134.465-.201.733-.201.182 0 .324.021.424.064.1.043.14.12.115.23-.014.072-.048.115-.1.13a.506.506 0 01-.195.007 1.25 1.25 0 00-.244-.022c-.24 0-.453.05-.64.151a1.121 1.121 0 00-.597 1.013h-.287zm.072 2.4a.23.23 0 01-.158-.058.23.23 0 01-.057-.158v-3.5c0-.067.019-.12.057-.158a.23.23 0 01.158-.057c.067 0 .12.019.158.057a.214.214 0 01.058.158v3.5a.23.23 0 01-.058.159.214.214 0 01-.158.057zm4.546 0a1.477 1.477 0 01-.704-.18 1.275 1.275 0 01-.482-.488 1.462 1.462 0 01-.172-.712v-3.58c0-.066.019-.119.057-.157a.215.215 0 01.158-.065.2.2 0 01.158.065.2.2 0 01.065.158v3.579c0 .278.086.505.259.683a.904.904 0 00.668.259h.158a.2.2 0 01.158.064.201.201 0 01.065.158.215.215 0 01-.065.159.214.214 0 01-.158.057h-.165zm-1.919-3.4a.21.21 0 01-.144-.05.21.21 0 01-.05-.144.185.185 0 01.194-.194h1.948c.057 0 .103.02.136.058.039.033.058.079.058.136a.185.185 0 01-.194.194h-1.948zm7.11 3.443c-.383 0-.728-.086-1.035-.259a1.988 1.988 0 01-.718-.718 2.06 2.06 0 01-.26-1.028c0-.383.087-.726.26-1.028.177-.306.416-.546.718-.719a2.03 2.03 0 011.035-.266c.383 0 .726.09 1.028.266.302.173.539.412.712.72.177.301.265.644.265 1.027 0 .378-.088.721-.266 1.028-.172.302-.41.541-.711.718a2.035 2.035 0 01-1.028.26zm0-.402c.302 0 .57-.07.805-.209.24-.144.427-.335.56-.575.14-.244.21-.52.21-.826 0-.302-.07-.573-.21-.813a1.47 1.47 0 00-.56-.574 1.51 1.51 0 00-.805-.216c-.297 0-.565.072-.805.216-.24.139-.429.33-.568.575-.138.24-.208.512-.208.819 0 .302.07.575.208.82.14.239.329.43.568.574.24.14.508.209.805.209zm3.62.359a.23.23 0 01-.158-.058.23.23 0 01-.057-.158V92.98c0-.325.05-.613.15-.862.101-.254.257-.453.468-.597.216-.143.489-.215.82-.215.066 0 .119.019.157.057.039.034.058.08.058.137 0 .057-.02.105-.058.144a.232.232 0 01-.158.05c-.244 0-.44.057-.59.172a.947.947 0 00-.315.46c-.063.192-.094.41-.094.654v3.723a.215.215 0 01-.064.159.214.214 0 01-.159.057zm-.776-3.4a.21.21 0 01-.144-.05.21.21 0 01-.05-.144.185.185 0 01.194-.194h1.948c.057 0 .103.02.136.058.039.033.058.079.058.136 0 .058-.02.106-.057.144a.185.185 0 01-.137.05H81.83zm6.247 3.4c-.052 0-.1-.02-.144-.058a.307.307 0 01-.079-.129l-1.487-5.103a.271.271 0 01.021-.223.193.193 0 01.18-.1c.048 0 .089.012.122.036.038.019.067.062.086.13l1.388 4.8h-.173l1.323-4.614a.153.153 0 01.071-.093.233.233 0 01.13-.044.21.21 0 01.13.044.183.183 0 01.078.1l1.323 4.607h-.173l1.387-4.822c.024-.096.094-.144.209-.144.081 0 .139.031.172.093.038.063.046.14.022.23l-1.48 5.103a.28.28 0 01-.094.144.21.21 0 01-.13.043.21.21 0 01-.143-.05.303.303 0 01-.08-.137l-1.308-4.628h.173l-1.294 4.628a.28.28 0 01-.093.137.2.2 0 01-.137.05zm6.412.036c-.378 0-.716-.084-1.013-.252a1.858 1.858 0 01-.69-.711 2.095 2.095 0 01-.252-1.035c0-.393.08-.738.237-1.035.159-.302.376-.54.654-.712.278-.172.597-.258.956-.258.355 0 .669.084.942.251.273.163.486.39.64.683.153.287.23.62.23.999 0 .062-.02.113-.058.15a.22.22 0 01-.151.051h-3.162v-.373h3.277l-.316.237a1.76 1.76 0 00-.158-.827 1.313 1.313 0 00-.496-.56 1.327 1.327 0 00-.748-.209c-.273 0-.517.07-.733.209a1.43 1.43 0 00-.503.56c-.12.24-.18.518-.18.834 0 .311.065.587.194.826.13.24.31.43.54.568.23.134.493.201.79.201.187 0 .374-.03.56-.093.192-.067.343-.153.453-.259a.186.186 0 01.137-.057.185.185 0 01.144.043c.052.043.079.09.079.144.005.052-.017.1-.065.143a1.818 1.818 0 01-.604.345c-.244.091-.479.137-.704.137zm3.431-.036a.831.831 0 01-.489-.151c-.139-.1-.249-.24-.33-.417a1.547 1.547 0 01-.115-.618V91.52c0-.067.019-.12.057-.158a.23.23 0 01.158-.057c.067 0 .12.019.159.057a.214.214 0 01.057.158v4.212c0 .22.046.403.136.546.096.14.219.209.367.209h.18c.053 0 .096.019.13.057.033.039.05.091.05.158a.23.23 0 01-.058.159.214.214 0 01-.158.057h-.144zm1.937 0a.831.831 0 01-.489-.151c-.138-.1-.249-.24-.33-.417a1.546 1.546 0 01-.115-.618V91.52c0-.067.02-.12.057-.158a.23.23 0 01.158-.057c.068 0 .12.019.159.057a.213.213 0 01.057.158v4.212c0 .22.046.403.137.546.096.14.218.209.366.209h.18c.053 0 .096.019.129.057a.23.23 0 01.051.158c0 .063-.02.115-.058.159a.213.213 0 01-.158.057h-.144zm4.546 0a.23.23 0 01-.158-.058.231.231 0 01-.057-.158V94.77c0-.316-.063-.577-.187-.783a1.123 1.123 0 00-.496-.46 1.525 1.525 0 00-.704-.158c-.259 0-.492.05-.698.15-.206.096-.369.23-.488.403a.996.996 0 00-.18.582h-.359c.019-.297.107-.563.266-.798.158-.24.364-.426.618-.56.254-.14.534-.209.841-.209.345 0 .654.072.927.216.278.139.496.345.654.618.158.268.237.601.237.999v1.933a.216.216 0 01-.065.159.203.203 0 01-.151.057zm-3.184 0a.23.23 0 01-.158-.058.231.231 0 01-.057-.158v-3.5c0-.067.019-.12.057-.158a.23.23 0 01.158-.057c.067 0 .12.019.159.057a.215.215 0 01.057.158v3.5a.231.231 0 01-.057.159.217.217 0 01-.159.057zm6.36.036c-.379 0-.716-.084-1.013-.252a1.848 1.848 0 01-.69-.711 2.092 2.092 0 01-.252-1.035c0-.393.079-.738.237-1.035.158-.302.376-.54.654-.712.278-.172.597-.258.956-.258.355 0 .669.084.942.251.273.163.486.39.639.683.154.287.23.62.23.999a.205.205 0 01-.057.15.222.222 0 01-.151.051h-3.162v-.373h3.277l-.316.237a1.767 1.767 0 00-.158-.827 1.317 1.317 0 00-.496-.56 1.328 1.328 0 00-.748-.209c-.273 0-.517.07-.733.209a1.43 1.43 0 00-.503.56c-.12.24-.18.518-.18.834 0 .311.065.587.194.826.13.24.309.43.539.568.23.134.494.201.791.201.187 0 .374-.03.561-.093.191-.067.342-.153.452-.259a.188.188 0 01.137-.057.187.187 0 01.144.043c.052.043.079.09.079.144.005.052-.017.1-.065.143a1.817 1.817 0 01-.604.345 2.011 2.011 0 01-.704.137zm3.977.007c-.249 0-.51-.045-.783-.136a1.495 1.495 0 01-.683-.46.207.207 0 01-.05-.151.215.215 0 01.093-.144.194.194 0 01.151-.036.21.21 0 01.137.079c.139.163.306.278.503.345.201.062.419.093.654.093.402 0 .687-.071.855-.215.168-.144.252-.312.252-.503 0-.187-.092-.34-.274-.46-.177-.125-.452-.214-.826-.266-.479-.067-.834-.197-1.064-.388-.23-.192-.345-.415-.345-.669 0-.24.06-.44.18-.603.12-.168.283-.293.489-.374.21-.086.45-.13.718-.13.326 0 .602.06.827.18.225.115.407.27.546.467.038.048.05.1.036.158-.01.053-.045.096-.108.13a.224.224 0 01-.287-.065 1.135 1.135 0 00-.439-.345 1.332 1.332 0 00-.589-.122c-.302 0-.537.065-.704.194-.168.13-.252.285-.252.467 0 .125.034.235.101.33.072.092.187.17.345.238.158.062.369.113.632.15.36.049.642.13.848.245.211.115.36.25.446.403.091.148.136.309.136.481a.875.875 0 01-.215.59 1.396 1.396 0 01-.568.388c-.235.086-.489.13-.762.13zm3.853 0c-.249 0-.51-.045-.783-.136a1.495 1.495 0 01-.683-.46.207.207 0 01-.05-.151.222.222 0 01.093-.144.195.195 0 01.151-.036.21.21 0 01.137.079c.139.163.306.278.503.345.201.062.419.093.654.093.402 0 .688-.071.855-.215.168-.144.252-.312.252-.503 0-.187-.091-.34-.273-.46-.178-.125-.453-.214-.827-.266-.479-.067-.834-.197-1.064-.388-.23-.192-.345-.415-.345-.669 0-.24.06-.44.18-.603.12-.168.283-.293.489-.374.211-.086.45-.13.719-.13.325 0 .601.06.826.18.225.115.407.27.546.467a.17.17 0 01.036.158c-.009.053-.045.096-.108.13a.232.232 0 01-.15.021.224.224 0 01-.137-.086 1.14 1.14 0 00-.438-.345 1.34 1.34 0 00-.59-.122c-.302 0-.536.065-.704.194-.168.13-.252.285-.252.467 0 .125.034.235.101.33.072.092.187.17.345.238.158.062.369.113.632.15.36.049.642.13.848.245.211.115.36.25.446.403.091.148.137.309.137.481a.876.876 0 01-.216.59 1.396 1.396 0 01-.568.388 2.19 2.19 0 01-.762.13zm7.217.029a2.68 2.68 0 01-1.085-.223 2.95 2.95 0 01-1.502-1.545 2.812 2.812 0 01-.223-1.114 2.905 2.905 0 01.812-2.02 2.789 2.789 0 012.94-.697c.297.105.575.266.833.482a.172.172 0 01.065.143c0 .058-.019.11-.058.158a.2.2 0 01-.158.065.237.237 0 01-.057-.007l-.058-.029a3.215 3.215 0 01-.064-.05 1.754 1.754 0 00-.654-.374 2.631 2.631 0 00-.791-.115c-.321 0-.625.067-.913.201a2.44 2.44 0 00-.762.54c-.22.225-.392.483-.517.776a2.332 2.332 0 00-.187.927c0 .335.062.651.187.948.125.298.295.559.51.784.221.225.475.402.762.532.288.124.594.187.92.187.283 0 .546-.043.791-.13a2.26 2.26 0 00.697-.395.154.154 0 01.136-.036c.053.01.099.034.137.072a.205.205 0 01.057.15.39.39 0 01-.007.08.145.145 0 01-.043.072 1.898 1.898 0 01-.819.489c-.307.086-.623.129-.949.129zm3.706-.072a.833.833 0 01-.489-.151c-.139-.1-.249-.24-.331-.417a1.558 1.558 0 01-.115-.618V91.52c0-.067.02-.12.058-.158a.23.23 0 01.158-.057c.067 0 .12.019.158.057a.215.215 0 01.058.158v4.212c0 .22.045.403.136.546.096.14.218.209.367.209h.179c.053 0 .096.019.13.057.033.039.05.091.05.158a.231.231 0 01-.057.159.216.216 0 01-.159.057h-.143zm2.726.043c-.384 0-.729-.086-1.035-.259a1.985 1.985 0 01-.719-.718 2.054 2.054 0 01-.259-1.028c0-.383.086-.726.259-1.028.177-.306.417-.546.719-.719a2.026 2.026 0 011.035-.266c.383 0 .725.09 1.027.266.302.173.539.412.712.72.177.301.266.644.266 1.027 0 .378-.089.721-.266 1.028-.173.302-.41.541-.712.718a2.034 2.034 0 01-1.027.26zm0-.402c.301 0 .57-.07.804-.209.24-.144.427-.335.561-.575.139-.244.208-.52.208-.826 0-.302-.069-.573-.208-.813a1.467 1.467 0 00-.561-.574 1.507 1.507 0 00-.804-.216 1.53 1.53 0 00-.805.216 1.52 1.52 0 00-.568.575c-.139.24-.209.512-.209.819 0 .302.07.575.209.82.139.239.328.43.568.574.239.14.507.209.805.209zm4.827.41c-.345 0-.654-.07-.927-.21a1.642 1.642 0 01-.654-.624c-.158-.273-.237-.607-.237-1v-1.933c0-.062.019-.112.057-.15a.215.215 0 01.158-.065c.063 0 .113.021.151.064a.19.19 0 01.065.151v1.934c0 .311.06.572.18.783.124.206.29.362.496.467.21.1.448.151.711.151.259 0 .491-.05.697-.15.206-.102.369-.236.489-.403a.995.995 0 00.18-.582h.359a1.624 1.624 0 01-.266.804 1.738 1.738 0 01-.618.561 1.743 1.743 0 01-.841.201zm1.581-.051a.23.23 0 01-.158-.058.231.231 0 01-.057-.158v-3.5c0-.067.019-.12.057-.158a.23.23 0 01.158-.057c.067 0 .12.019.158.057a.211.211 0 01.058.158v3.5a.227.227 0 01-.058.159.213.213 0 01-.158.057zm3.305.043c-.383 0-.728-.086-1.035-.259a1.99 1.99 0 01-.718-.718 2.069 2.069 0 01-.259-1.035c0-.384.086-.726.259-1.028.177-.302.417-.54.718-.712a2.032 2.032 0 011.035-.266c.345 0 .654.075.928.223.277.149.493.348.646.597V91.52c0-.067.02-.12.058-.158a.23.23 0 01.158-.057c.067 0 .12.019.158.057a.215.215 0 01.058.158v3.472c-.005.373-.096.709-.274 1.006a1.983 1.983 0 01-1.732.963zm0-.402c.302 0 .571-.07.805-.209.24-.144.427-.335.561-.575.139-.244.208-.52.208-.826 0-.307-.069-.58-.208-.82a1.48 1.48 0 00-.561-.567 1.508 1.508 0 00-.805-.216c-.297 0-.565.072-.805.216a1.539 1.539 0 00-.567.567c-.139.24-.209.513-.209.82 0 .306.07.582.209.826.139.24.328.431.567.575.24.14.508.209.805.209z"
        fill="#156D78"
      />
    </Svg>
  )
}

export default SplashImage;
import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function BabyClassesImage(props: any) {
  return (
    <Svg
      width={58}
      height={68}
      viewBox="0 0 90 100"
      fill="none"
      {...props}
    >
      <Path
        d="M45 100c24.853 0 45-6.274 45-14.014 0-7.74-20.147-14.014-45-14.014S0 78.247 0 85.986C0 93.726 20.147 100 45 100z"
        fill="#D3D3D3"
      />
      <Path
        d="M85.497 76.556c-.22-1.054-.62-4.267-2.134-4.498-2.085-.317-3.206 2.234-4.766 3.176-1.466.886-2.82.009-4.031-.818a54.417 54.417 0 01-3.175-2.357c-1.727-1.372-3.287-2.93-4.957-4.36-.002-2.46-.325-4.925-.838-7.194-.568-2.515-1.518-4.94-2.722-7.221-.767-1.454-1.724-2.792-1.906-4.469-.046-.428-.009-.82.084-1.189 1.956-1.234 3.79-2.682 5.364-4.269 2.34-2.358 4.554-5.877 4.353-9.311-.222-3.8-6.165-1.113-7.983-.483-2.876.996-5.886 2.211-8.546 3.833-2.485.464-4.908 1.377-7.31 2.123-2.824.876-5.642 1.779-8.478 2.616-2.677.79-5.385 1.339-8.188 1.313-1.482-.014-2.959-.228-4.403-.541-.695-.151-1.379-.38-2.068-.57-1.18-.831-2.582-1.45-3.827-2.014-2.026-.915-4.175-1.574-6.352-2.03-1.017-.212-3.65-.989-3.995.659-.338 1.615.686 3.51 1.309 4.956a36.61 36.61 0 007.154 10.805c.892.935 1.854 1.848 2.889 2.646 1.916 3.65.382 8.327.258 12.349a22.866 22.866 0 00.137 3.35c-.974 2.6-3.051 4.776-4.862 6.952l-1.895 2.278c-.67.806-1.493 2.382-2.718 2.217-.918-.123-1.875-.544-2.763-.808-1.083-.322-2.168-.636-3.253-.953-.348-.102-.613.226-.55.545a23.264 23.264 0 004.078 9.316c.925 1.264 1.973 2.484 3.399 3.2 1.42.714 3.038.317 4.45-.181 3.826-1.351 7.583-2.71 11.535-3.68a90.867 90.867 0 015.354-1.12c.338-.053.676-.104 1.013-.152 2.57-.365 5.144-.7 7.72-1.02A262.42 262.42 0 0157.6 88.26c4.756-.319 9.52-.489 14.287-.556 2.4-.034 4.8-.001 7.2-.004.259 0 .52-.004.782-.013 1.414.188 2.87.288 4.15-.216 1.457-.574 1.906-2.12 2.06-3.517.269-2.435-.084-5.013-.581-7.398z"
        fill="#FFBE55"
      />
      <Path
        d="M21.586 77.966c1.399 1.09 2.83 2.144 4.223 3.24.23.182.51-.09.323-.319-2.005-2.447-3.685-4.889-4.606-7.942a15.367 15.367 0 01-.256-.973c.024.362.053.724.096 1.086-.51 1.36-1.323 2.604-2.24 3.794.95-.136 1.753.563 2.46 1.114zM11.898 41.975c-.49.271-.978.544-1.467.817.172.391.346.767.496 1.116a36.452 36.452 0 004.378 7.532c-1.262-3.309-1.125-6.945.084-10.412.1-.286-.345-.468-.49-.21.21-.526.153-1.082-.09-1.589 1.34.453 2.647 1.013 3.903 1.753 3.045 1.795 5.403 4.697 6.303 8.102.958 3.624-.745 7.15-1.546 10.627-.683 2.968-.283 5.821 1.29 8.439 3.138 5.22 9.677 7.951 15.55 8.496 6.433.597 12.77-1.951 16.74-7.017 4.169-5.32 4.688-12.484 1.923-18.536-1.502-3.288-3.9-6.595-3.03-10.385.635-2.762 2.952-4.671 5.056-6.498-2.312.869-4.645 1.898-6.758 3.186-2.485.464-4.908 1.377-7.31 2.123-2.824.876-5.642 1.778-8.478 2.616-2.677.79-5.385 1.339-8.188 1.313-1.482-.014-2.959-.228-4.403-.541-.695-.151-1.379-.38-2.069-.57-1.179-.832-2.58-1.451-3.826-2.014-2.027-.915-4.175-1.574-6.352-2.03-.717-.15-2.236-.578-3.191-.242 1.007.224 2.005.464 2.989.744.19.228.382.455.55.7.85 1.24-1.409 2.117-2.064 2.48zM85.497 76.556c-.22-1.054-.62-4.267-2.135-4.498a2.312 2.312 0 00-.168-.019c2.355 3.567 3.013 8.794-.78 11.665-3.897 2.95-7.918-1.102-11.904-1.535-4.58-.497-8.124 2.406-12.478 3.132-2.457.41-5 .475-7.48.673-.732.059-1.462.123-2.192.19-.89-.005-1.78.053-2.629.11-2.26.153-4.502.551-6.736.903-2.292.361-4.584.668-6.905.739-2.156.066-4.308-.003-6.454.26-1.76.218-3.415.75-4.934 1.656-1.942 1.156-3.516 2.707-5.88 2.949-2.136.219-4.246-.731-5.96-1.9a11.31 11.31 0 01-1.107-.87c.49.894 1.039 1.76 1.648 2.594.925 1.265 1.973 2.484 3.399 3.2 1.42.715 3.038.317 4.45-.181 3.826-1.35 7.583-2.71 11.535-3.679a90.867 90.867 0 015.354-1.121c.338-.053.676-.104 1.013-.152 2.57-.365 5.144-.7 7.72-1.02A262.33 262.33 0 0157.6 88.26c4.756-.319 9.52-.488 14.287-.556 2.4-.034 4.8-.001 7.2-.003.259 0 .52-.005.782-.014 1.414.188 2.87.288 4.15-.216 1.457-.574 1.906-2.12 2.06-3.517.269-2.435-.084-5.013-.581-7.398zM63.158 33.428c-.455 2.31 1.317 4.996 1.89 7.077.365 1.331.33 2.736.063 4.083.451-.4.888-.81 1.305-1.23 2.34-2.359 4.554-5.878 4.353-9.312-.209-3.57-5.47-1.413-7.611-.618z"
        fill="#F9B55A"
      />
      <Path
        d="M63.252 76.076l.009.005c.041-.09.079-.182.12-.271.77-1.706 2.313-2.803 4.152-3.177 2.327-.472 4.114.852 5.8 2.207 1.468 1.179 3.532 1.638 4.775.625-1.278.456-2.467-.315-3.543-1.049a54.385 54.385 0 01-3.174-2.357c-1.727-1.372-3.287-2.93-4.957-4.36-.002-2.46-.325-4.925-.838-7.194-.568-2.516-1.518-4.94-2.722-7.221-.069-.131-.14-.262-.212-.391.258.81.62 1.605.867 2.394.448 1.428.79 2.88 1.071 4.348.093.483.163.965.22 1.446.18 2.067.23 4.13.034 6.214-.279 2.959-1.148 5.763-2.244 8.514-.157.394.423.575.642.267z"
        fill="#F9B55A"
      />
      <Path
        d="M57.786 50.996c-2.241-6.029-5.396-13.231-12.513-14.455-6.43-1.106-12.698 3.21-15.134 8.943a.26.26 0 00-.022.117c-3.4 4.931-6.232 10.405-5.627 16.542.287 2.916 1.533 5.702 3.575 7.825 2.23 2.321 5.506 3.314 8.597 3.88 6.564 1.204 13.733.386 18.74-4.326 5.231-4.922 4.68-12.35 2.384-18.526z"
        fill="#fff"
      />
      <Path
        opacity={0.5}
        d="M57.786 50.996c-2.241-6.029-5.396-13.231-12.513-14.455-6.43-1.106-12.698 3.21-15.134 8.943a.26.26 0 00-.022.117c-3.4 4.931-6.232 10.405-5.627 16.542.287 2.916 1.533 5.702 3.575 7.825 2.23 2.321 5.506 3.314 8.597 3.88 6.564 1.204 13.733.386 18.74-4.326 5.231-4.922 4.68-12.35 2.384-18.526zm-3.681 17.291c-2.463 2.74-6.334 4.082-9.878 4.731-7.091 1.3-15.285-1.842-17.278-9.22-.984-3.643.197-7.553 1.911-10.785 1.845-3.478 4.574-6.645 8.789-6.868l.418.008a.265.265 0 00.245-.15l.29.093c.339.097.708.138 1.055.204.502.096.98.337 1.506.188.308-.088.662-.222.967-.411 3.878-.705 8.041-2.535 11.351.666 1.288 1.245 1.95 3.059 2.52 4.703.705 2.034 1.177 4.141 1.351 6.284.308 3.784-.664 7.685-3.247 10.557z"
        fill="#E4E4E4"
      />
      <Path
        d="M48.504 38.352c-2.34-4.358-9.207-2.875-12.924-1.53-2.012.729-3.845 1.923-4.456 4.051-.233.81-.118 1.53.194 2.173 1.213 4.198 6.659 5.519 10.517 4.825 2.16-.388 4.293-1.635 5.578-3.41 1.195-1.652 2.141-4.152 1.09-6.109z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M48.504 38.352c-2.34-4.358-9.207-2.875-12.924-1.53-2.012.729-3.845 1.923-4.456 4.051-.233.81-.118 1.53.194 2.173 1.213 4.198 6.659 5.519 10.517 4.825 2.16-.388 4.293-1.635 5.578-3.41 1.195-1.652 2.141-4.152 1.09-6.109z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M48.504 38.352c-2.34-4.358-9.207-2.875-12.924-1.53-2.012.729-3.845 1.923-4.456 4.051-.233.81-.118 1.53.194 2.173 1.213 4.198 6.659 5.519 10.517 4.825 2.16-.388 4.293-1.635 5.578-3.41 1.195-1.652 2.141-4.152 1.09-6.109z"
        fill="#F4D3C3"
      />
      <Path
        d="M58.19 16.322c-.845-1.932-3.245-3.545-5.482-3.487-.308-.01-.623.03-.913.107a2.036 2.036 0 00-.253.088 3.743 3.743 0 00-.787.361c-.1.06-.106.186-.047.264-.497.59-.75 1.416-.82 2.142-.286 2.957 3.02 6.57 5.864 6.94 1.387.181 2.354-1.03 2.806-2.145.552-1.364.196-2.982-.368-4.27z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M58.19 16.322c-.845-1.932-3.245-3.545-5.482-3.487-.308-.01-.623.03-.913.107a2.036 2.036 0 00-.253.088 3.743 3.743 0 00-.787.361c-.1.06-.106.186-.047.264-.497.59-.75 1.416-.82 2.142-.286 2.957 3.02 6.57 5.864 6.94 1.387.181 2.354-1.03 2.806-2.145.552-1.364.196-2.982-.368-4.27z"
        fill="#F4D3C3"
      />
      <Path
        d="M56.986 20.037c-1.536-3.374-3.04-6.765-4.618-10.12-1.266-2.695-2.82-5.136-5.274-6.91C42.424-.37 35.74-.593 30.34.818 20.536 3.38 13.776 12.39 13.653 22.102a.259.259 0 00-.114.183c-.838 6.173.762 12.766 5.023 17.455 4.431 4.875 11.39 6.733 17.818 6.315 6.733-.438 14.2-3.258 19.137-7.88 2.342-2.193 3.891-5.085 4.307-8.248.463-3.512-1.433-6.804-2.838-9.89z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M59.673 26.8c-.743 5.39-5.454 9.6-10.778 11.56-3.761 1.386-7.867 1.864-11.842 2.19-3.991.328-8.093.114-11.764-1.6-6.715-3.136-9.37-11.956-9.712-18.728-.194-3.85.596-7.538 2.287-10.767-2.624 3.661-4.153 8.076-4.211 12.647a.258.258 0 00-.114.183c-.838 6.173.762 12.766 5.023 17.455 4.431 4.875 11.39 6.733 17.818 6.315 6.733-.438 14.2-3.258 19.137-7.88 2.342-2.193 3.891-5.085 4.307-8.248.14-1.063.062-2.105-.151-3.127z"
        fill="#F4D3C3"
      />
      <Path
        d="M17.265 21.738A4.205 4.205 0 0015 20.203a4.313 4.313 0 00-1.657-.453c-1.842-.111-3.552.753-4.659 2.207-2.59 3.401-2.002 8.593 1.995 10.642 3.715 1.903 7.46-1.026 7.874-4.759.232-2.094-.003-4.36-1.29-6.102z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M9.412 29.176c-1.619-2.236-1.54-4.83-.71-7.24l-.017.02c-2.59 3.402-2.002 8.594 1.995 10.642 2.391 1.226 4.794.447 6.314-1.259-2.594 1.3-5.827.262-7.582-2.163z"
        fill="#F4D3C3"
      />
      <Path
        d="M75.741 34.693c-.781-.352-.308-.762-.034-1.325.218-.447.143-.931-.002-1.381-.316-.98-1.256-1.185-2.158-1.123.36-1.095.75-2.774-.242-3.205-1.844-.8-2.395 1.532-3.872 2.058-1.404.501-1.462-3.612-3.412-2.984-1.003.322-1.686 1.48-2.076 2.627-.863 2.054-.95 4.697-.108 6.411 1.509 3.073 4.506 3.51 7.604 2.783 1.258-.294 3.41-.832 4.334-1.8.506-.531.876-1.652-.034-2.061z"
        fill="#F4D3C3"
      />
      <G opacity={0.5} fill="#F4D3C3">
        <Path
          opacity={0.5}
          d="M71.442 38.554c1.257-.295 3.41-.832 4.333-1.8.506-.531.876-1.652-.034-2.061-.781-.352-.308-.762-.033-1.325.217-.447.142-.931-.003-1.381a1.48 1.48 0 00-.715-.882c.049.468.139.934.04 1.436-.162.82-.97 1.184-1.173 1.915-.09.323.116.536.37.67.136.073.317.054.46.015.362-.098.75-.075 1.06.097-1.159 2.118-4.969 2.117-7.208 1.606-1.6-.366-3.15-1.121-4.054-2.516-.702-1.08-.846-2.226-1.025-3.404-.365 1.708-.262 3.545.377 4.847 1.509 3.072 4.507 3.51 7.605 2.783z"
        />
        <Path
          opacity={0.5}
          d="M73.305 27.659a1.815 1.815 0 00-.707-.164c.42.328.578.69.608 1.38.038.872-.443 1.744-.758 2.532-.094.235.232.477.437.332.333-.236.632-.541.867-.884a4.259 4.259 0 00-.205.009c.36-1.095.75-2.774-.242-3.205zM66.458 26.67c.486.526.895.905 1.063 1.735.151.747.339 1.357.98 1.816.114.08.268.054.383 0 .433-.205.91-.53 1.27-.935a2.37 2.37 0 01-.72.43c-1.291.461-1.446-2.973-2.976-3.045z"
        />
      </G>
      <Path
        d="M4.984 45.943c1.23.538 3.426.208 4.7-.002 3.14-.519 5.732-2.071 5.92-5.482.104-1.903-1.012-4.306-2.612-5.869-.81-.907-1.893-1.713-2.944-1.626-2.043.17-.485 3.984-1.976 4.06-1.567.082-2.989-1.857-4.375-.412-.746.777.271 2.176 1.033 3.047-.856.289-1.642.84-1.55 1.863.043.47.164.945.54 1.274.473.414 1.07.61.487 1.234-.678.726.102 1.617.777 1.913z"
        fill="#F4D3C3"
      />
      <G opacity={0.5} fill="#F4D3C3">
        <Path
          opacity={0.5}
          d="M13.095 43.255c-1.157 1.094-2.806 1.525-4.336 1.78-1.277.213-3.599.6-4.8-.255.08.502.575.965 1.025 1.163 1.231.538 3.426.208 4.7-.002 3.141-.519 5.733-2.071 5.92-5.482.076-1.398-.507-3.065-1.455-4.471 1.119 2.465 1.08 5.249-1.054 7.267z"
        />
        <Path
          opacity={0.5}
          d="M4.42 43.72c.567.202 1.2.2 1.81.076.25-.051.265-.474 0-.512-.805-.113-1.52-.343-2.101-.931-.323-.326-.504-.78-.616-1.213-.05-.197-.064-.395-.106-.586a1.476 1.476 0 00-.227.968c.043.47.164.945.54 1.274.384.336.851.529.7.925zM10.1 36.453c.328-.547.015-1.272-.2-1.788-.355-.845.007-1.483.876-1.627a2.124 2.124 0 00-.727-.073c-2.044.17-.486 3.983-1.977 4.06-.186.01-.37-.01-.552-.049.75.588 2.093.29 2.58-.523zM4.454 39.764c.624.121 1.316.045 1.895-.067.207-.04.255-.367.06-.456-.62-.287-1.232-.426-1.748-.908-.639-.598-.636-1.402-.37-2.146-.199.084-.397.22-.594.425-.746.778.272 2.176 1.033 3.047a4.137 4.137 0 00-.276.105z"
        />
      </G>
      <Path
        d="M49.204 60.962c0 3.3-3.255 5.403-7.27 5.403-4.016 0-7.27-2.103-7.27-5.403 0-3.3 3.254-6.547 7.27-6.547 4.015 0 7.27 3.247 7.27 6.547z"
        fill="#FBE2FC"
      />
      <Path
        d="M37.441 57.41c.774-.41.964-1.55.424-2.547-.54-.997-1.604-1.473-2.378-1.064-.773.41-.963 1.55-.424 2.548.54.997 1.605 1.473 2.378 1.063zM48.796 56.348c.54-.997.35-2.138-.424-2.547-.773-.41-1.838.066-2.378 1.064-.54.997-.35 2.137.424 2.547.774.41 1.838-.067 2.378-1.064z"
        fill="#FBE2FC"
      />
      <Path
        d="M41.934 64.364c1.864 0 3.376-1.115 3.376-2.491 0-1.377-1.512-2.492-3.376-2.492-1.865 0-3.377 1.115-3.377 2.492 0 1.376 1.512 2.491 3.377 2.491z"
        fill="#fff"
      />
      <Path
        d="M43.213 60.395c0 .521-.573 1.225-1.28 1.225-.706 0-1.278-.704-1.278-1.225 0-.522.572-.663 1.279-.663.706 0 1.279.142 1.279.663zM38.973 59.765c.329 0 .595-.264.595-.59a.593.593 0 00-.595-.59.593.593 0 00-.596.59c0 .326.267.59.596.59zM44.895 59.765c.33 0 .596-.264.596-.59a.593.593 0 00-.596-.59.593.593 0 00-.596.59c0 .326.267.59.596.59z"
        fill="#0C486E"
      />
      <Path
        d="M30.637 26.735c1.553 0 2.812-1.644 2.812-3.672 0-2.028-1.26-3.672-2.812-3.672-1.553 0-2.812 1.644-2.812 3.672 0 2.028 1.26 3.672 2.812 3.672z"
        fill="#1E0F00"
      />
      <Path
        d="M31.608 22.183c.375 0 .678-.375.678-.838 0-.463-.303-.839-.678-.839-.374 0-.678.376-.678.839 0 .463.304.838.678.838z"
        fill="#fff"
      />
      <Path
        d="M48.64 23.319c1.438-.581 1.975-2.574 1.2-4.451-.776-1.878-2.57-2.928-4.007-2.348-1.438.581-1.974 2.574-1.2 4.451.776 1.878 2.57 2.929 4.008 2.348z"
        fill="#1E0F00"
      />
      <Path
        d="M47.8 18.742c.346-.14.484-.602.307-1.03-.177-.429-.602-.663-.948-.523-.347.14-.485.602-.308 1.03.177.429.602.663.949.523z"
        fill="#fff"
      />
      <Path
        d="M51.2 26.384c2.69-1.536 4.275-3.803 3.54-5.063-.735-1.26-3.512-1.035-6.202.501-2.69 1.537-4.275 3.803-3.54 5.063.736 1.26 3.513 1.036 6.203-.5zM37.291 28.777c.119-1.544-2.459-2.997-5.756-3.244-3.298-.248-6.067.804-6.186 2.348-.118 1.544 2.46 2.997 5.757 3.244 3.298.247 6.067-.804 6.185-2.348z"
        fill="#F4D3C3"
      />
      <Path
        opacity={0.5}
        d="M39.977 34.007h-.103c-2.073-.02-3.588-.623-3.651-.649a.64.64 0 01-.356-.838.652.652 0 01.846-.353c.22.088 5.406 2.094 9.3-2.019a.655.655 0 01.919-.03c.262.243.275.65.03.91-1.847 1.95-4.26 2.979-6.985 2.979z"
        fill="#FFA89C"
      />
      <Path
        d="M36.64 10.72c-1.153 0-2.289-.394-2.985-1.104-.671-.685-.84-1.571-.476-2.495.85-2.154 2.2-2.67 3.18-2.435.956.229 1.57 1.159 1.46 2.211a.287.287 0 01-.318.255.287.287 0 01-.257-.314c.08-.764-.35-1.436-1.02-1.597-.743-.178-1.791.277-2.506 2.088-.356.901-.005 1.525.352 1.89.854.87 2.583 1.18 3.937.704C39.214 9.5 39.943 8.532 40.06 7.2c.093-1.054-.192-1.926-.845-2.59-1.78-1.81-5.71-1.603-5.75-1.6a.289.289 0 01-.305-.27.287.287 0 01.271-.301c.172-.01 4.235-.224 6.198 1.772.776.79 1.114 1.811 1.006 3.039-.137 1.567-1.002 2.708-2.435 3.212a4.721 4.721 0 01-1.56.258z"
        fill="#1E0F00"
      />
    </Svg>
  )
}

export default BabyClassesImage;
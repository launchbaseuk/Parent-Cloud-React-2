import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");
export default function MindHub() {
    return (
        <View style={styles.screenHeaderContainer}>
            <Text style={styles.screenHeaderText}>Mind Hub</Text>
            <Svg
                width={223}
                height={330}
                viewBox="0 0 223 330"
                fill="none"
                style={styles.svg}
            >
                <Path
                    d="M26.333 313.079c6.322 2.63 13.406 2.97 20.534-.424 10.903-5.219 17.097-16.588 23.036-26.473 15.23-25.497 29.994-51.121 44.545-77.085 14.467-25.624 28.637-51.376 42.849-77.127 13.873-25.2 28.382-50.315 39.667-76.746 7.339-17.436 11.836-41.703-9.037-51.757-22.145-10.606-46.285 6.024-61.303 21.34-8.866 9.078-16.376 19.43-23.46 29.993-8.146 12.049-15.825 24.267-23.206 36.697-15.103 25.2-28.976 51.121-41.703 77.594a1105.472 1105.472 0 00-18.37 40.091C14.582 221.4 9.067 233.576 4.994 246.218c-5.26 16.418-6.576 36.231 3.436 50.4 4.285 7.17 10.564 13.406 17.903 16.461zM5.588 256.145c2.673-11.921 7.679-23.206 12.43-34.406 5.133-12.303 10.606-24.478 16.249-36.654A1024.753 1024.753 0 0170.75 113.77c12.94-22.952 26.473-45.734 41.958-67.115 13.194-18.158 31.479-39.328 55.067-42.849 11.751-1.782 25.115 2.546 30.163 14.085 4.073 9.121 1.909 19.642-1.23 28.721-3.988 11.624-9.673 22.697-15.23 33.6-5.982 11.752-12.261 23.291-18.624 34.873-12.897 23.418-25.794 46.836-38.691 70.17-13.025 23.333-26.219 46.624-39.582 69.703a2130.35 2130.35 0 01-20.194 34.236c-6.024 9.927-13.66 21.212-26.218 22.739-18.582 2.291-32.54-20.872-33.982-36.739-.679-6.364.042-12.855 1.4-19.049z"
                    fill="#fff"
                />
                <Path
                    d="M217.709 25.951c-3.267 5.94-6.491 11.922-9.757 17.861-26.219 48.067-52.479 96.091-78.74 144.158-7.339 13.448-14.806 26.812-22.188 40.26a1532.797 1532.797 0 00-10.945 20.237 19414.152 19414.152 0 01-21.849 40.982c-3.69 6.915-7.382 13.787-11.072 20.703-2.758 5.175-4.752 10.733-8.867 15.103-1.952 2.036-4.327 3.733-7.085 4.369-2.333.552-4.582.128-6.745-.806-1.952-.806-3.776-1.06-5.855-1.612-7.17-1.909-14.255-4.2-21.17-6.957-1.654-.679-3.436-1.4-4.454-2.885-1.91-2.715-.552-6.109.297-8.952 1.06-3.521 2.29-7 3.479-10.479C30.32 246.261 47.885 194.545 65.49 142.788c8.782-25.879 17.606-51.715 26.388-77.594 4.242-12.473 8.273-25.03 12.727-37.418 3.267-9.037 7.891-17.86 17.479-21.297 10.436-3.734 22.824-1.91 33.642-1.697 13.746.297 27.491.636 41.237.933 5.854.127 12.091-.382 17.86.721 3.182.594 6.364 2.08 7.509 5.346 1.612 4.879-2.418 10.14-4.624 14.17z"
                    fill="#FFEFB3"
                />
                <Path
                    d="M88.57 93.067c-.085-3.903-1.103-10.31-7-10.564-6.703-.254-7.806 4.2-7.891 6.873 0 .72-4.964 3.181-4.964 3.181l9.249 13.576 8.484-7.594c1.316-1.272 2.164-3.648 2.122-5.472z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M83.818 76.606c-.212 2.164-.17 4.327.043 6.49.254 2.292.678 4.498 1.4 6.704.381 1.273.89 2.503 1.442 3.69.085.17.212.298.382.383a.968.968 0 00.509.254c.34.085.806.043 1.145-.127.297-.212.594-.51.68-.891 0-.127.042-.254.042-.382 0-.254-.085-.509-.212-.721-.128-.212-.213-.467-.297-.679.042.127.084.255.127.34-.849-2.037-1.527-4.158-1.91-6.364-.127-.636-.211-1.273-.296-1.867 0 .128.042.255.042.382-.254-1.867-.34-3.733-.254-5.642 0-.51.042-1.06.127-1.57 0-.212-.042-.382-.127-.551-.043-.17-.17-.34-.297-.467a1.566 1.566 0 00-1.019-.424c-.381 0-.763.127-1.018.424-.085.085-.127.212-.254.297-.17.212-.255.466-.255.721zM79.406 75.036c0 1.528.042 3.097.127 4.667.128 1.527.255 3.097.467 4.624.127.976.254 1.952.424 2.97.043.17.127.34.255.51.127.169.254.296.382.38.296.17.763.255 1.145.128.34-.127.679-.34.89-.679.043-.127.086-.254.128-.339.085-.255.085-.51 0-.764-.127-.806-.254-1.57-.382-2.375 0 .127.043.254.043.381-.34-2.46-.51-4.878-.594-7.339 0-.721-.043-1.4-.043-2.121 0-.382-.17-.764-.424-1.018a1.565 1.565 0 00-1.018-.425c-.382 0-.764.128-1.018.425a1.374 1.374 0 00-.382.975zM75.164 76.776c.127 2.163.297 4.327.593 6.448l.255 2.164c.043.17.127.34.255.509.127.17.254.297.381.382.297.17.764.254 1.146.127.34-.127.679-.34.89-.679.043-.127.086-.254.128-.34.085-.254.085-.508 0-.763 0-.127-.042-.254-.042-.382 0 .128.042.255.042.382-.254-2.036-.509-4.072-.636-6.066l-.128-1.74c0-.382-.127-.763-.424-1.018a1.565 1.565 0 00-1.018-.424c-.382 0-.764.127-1.018.424-.212.212-.424.594-.424.976zM71.727 80.085c.085 1.06.17 2.164.255 3.224.042.764.085 1.57.17 2.376.127 1.23.339 2.46.636 3.69.297 1.231.636 2.461.976 3.692.127.339.339.678.678.89.297.17.764.255 1.146.128.34-.127.679-.34.89-.679.17-.34.255-.764.128-1.145-.467-1.612-.933-3.225-1.23-4.88l-.255-1.4c0 .128.043.255.043.383-.128-1.061-.17-2.122-.255-3.182-.042-.849-.127-1.697-.17-2.588 0-.17-.042-.382-.042-.552 0-.212-.043-.381-.127-.551-.043-.17-.17-.34-.297-.467a1.566 1.566 0 00-1.019-.424c-.381 0-.763.127-1.018.424-.34.34-.551.679-.509 1.06z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M88.145 83.86c-.254 1.061-.509 2.164-.89 3.182-.17.467-.382.934-.51 1.4-.17.764-.17 1.528-.212 2.249 0 .382-.085.764-.085 1.145 0-.17.085-.424 0-.127 0 .127-.042.212-.042.297-.042.212-.127.424-.17.636-.042.128-.127.255-.127.382-.042.17.085-.17.085-.17-.043.043-.085.213-.127.255a7.877 7.877 0 01-.467.806c-.085.127-.212.297-.297.467 0 .042-.17.212-.042.042.127-.212-.128.17-.128.17-.297.34-.594.679-.89.976-.68.679-.722 1.909 0 2.588.72.678 1.866.72 2.587 0 1.019-1.019 1.952-2.164 2.546-3.48.466-1.102.721-2.163.806-3.35 0-.383.042-.764.042-1.146v-.552-.254c.043-.382 0 .254-.042.254-.043 0 .382-1.23.424-1.315.424-1.145.721-2.333.976-3.521.212-.933-.255-2.036-1.273-2.248-.848-.128-1.909.339-2.164 1.315z"
                    fill="#71D2C1"
                />
                <Path
                    d="M121.958 105.455c-4.243-.128-8.316 1.527-12.007 3.478-5.175 2.715-9.46 5.728-15.57 3.734-3.35-1.103-6.363-2.928-9.714-4.115-5.6-1.952-11.582-1.825-17.31-3.097-5.6-1.273-10.733-4.285-15.187-7.849-.382-.34-.806-.636-1.188-1.018-.255-.212-.594-.297-.891-.17-1.91.679-8.485 3.818-11.243 15.188a.918.918 0 00.637 1.103c1.06.297.806 1.867-.297 1.782h-.297a.856.856 0 00-.933.764c-.467 3.012-1.825 13.787-.255 24.818a.888.888 0 00.467.636c2.503 1.4 16.672 8.57 34.915 2.715 20.109-6.448 28.933-1.909 35.763-1.612 11.752.467 22.91-7.085 23.885-19.176"
                    fill="#896251"
                />
                <Path
                    d="M124.715 153.224s-49.89 2.037-56.976-8.485c-7.085-10.521 12.346-50.018 12.346-50.018"
                    stroke="#FECD78"
                    strokeWidth={27.3137}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M94.34 196.794H76.223a2.175 2.175 0 01-2.121-1.739l-6.406-31.267c-.255-1.358.763-2.63 2.121-2.63h18.115c1.018 0 1.91.721 2.121 1.739l6.406 31.267c.297 1.4-.72 2.63-2.12 2.63z"
                    fill="#168C8C"
                />
                <Path
                    d="M76.776 172.358h-3.012a.408.408 0 01-.382-.297l-1.06-5.219c-.043-.212.126-.424.381-.424h3.012c.17 0 .34.127.382.297l1.06 5.218c0 .212-.17.425-.381.425z"
                    fill="#3A3144"
                />
                <Path
                    d="M129.17 217.921c14.058 0 25.454-11.396 25.454-25.454 0-14.059-11.396-25.455-25.454-25.455-14.059 0-25.455 11.396-25.455 25.455 0 14.058 11.396 25.454 25.455 25.454z"
                    fill="#385A7D"
                />
                <Path
                    d="M106.261 191.915l48.363 7.467s5.006 13.873 6.406 25.327H95.485l10.776-32.794z"
                    fill="#4F8AE0"
                />
                <Path
                    d="M106.261 191.915l48.363 7.467s5.006 13.873 6.406 25.327H95.485l10.776-32.794z"
                    fill="#82C8C6"
                />
                <Path
                    d="M102.739 202.564l-4.624 14c10.182 3.139 41.83 11.878 62.067 2.969-1.612-8.315-4.37-16.588-5.261-19.303-14.339-.933-34.873.552-52.182 2.334z"
                    fill="#116C76"
                />
                <Path
                    d="M106.261 191.915l-5.134 15.57h56.085c-1.4-4.752-2.588-8.146-2.588-8.146l-48.363-7.424z"
                    fill="#2E60B8"
                />
                <Path
                    d="M125.436 127.515l1.74 14.382"
                    stroke="#E1AB9F"
                    strokeWidth={14.5673}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M128.788 130.909s-4.709 7.849-9.376 8.315l-1.188-8.824.806.042"
                    fill="#3A3144"
                />
                <Path
                    d="M118.267 134.727c8.272.637 15.484-5.6 16.078-13.872l.17-2.504c.467-6.024-4.115-11.327-10.139-11.751-6.025-.467-11.328 4.115-11.752 10.139l-.763 10.564c-.255 3.818 2.63 7.17 6.406 7.424z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M124.418 106.6c-6.024-.467-11.327 4.115-11.751 10.139l-.043.679s8.952 2.037 13.279-1.57c1.273-1.06 2.079-2.206 2.545-3.266 0 3.733.976 8.188 6.025 6.703l.085-.934c.466-6.024-4.073-11.327-10.14-11.751z"
                    fill="#B58C85"
                />
                <Path
                    d="M109.655 114.745s8.654 1.316 11.454-1.654c0 0-.721 3.818 1.57 6.406l7.594 10.648 2.757.255s10.818-16.842-2.715-21.509c0-.043-11.794-10.776-20.66 5.854z"
                    fill="#896251"
                />
                <Path
                    d="M164.806 168.285l-1.23 23.376c-.212 4.327-3.818 7.721-8.146 7.678l-53.582-.551c-1.993 0-3.69-1.527-3.945-3.521l-4.158-32.582c-1.527-12.176 7.934-22.909 20.194-22.909l23.885.042c15.485 0 27.788 12.982 26.982 28.467z"
                    fill="#FECD78"
                />
                <Path
                    d="M155.515 187.673s2.715-8.697.679-17.012c-2.036-8.316-11.539-.34-14.127 2.291-2.588 2.63-4.54-3.225-11.243-.849-4.412 1.57-4.879 5.812-13.703.806-6.363-3.606-9.63 4.964-15.315.043-3.86-3.352-5.94-2.461-6.873-1.57l3.055 23.885c.254 1.994 1.951 3.478 3.945 3.521l48.661.509 4.921-11.624z"
                    fill="#E5B56E"
                />
                <Path
                    d="M115.806 122.127a.806.806 0 100-1.612.806.806 0 000 1.612zM116.57 118.139a8.101 8.101 0 00-1.4-.254c-.467 0-.467.721 0 .721.424 0 .806.085 1.23.212.424.17.594-.551.17-.679z"
                    fill="#3A3144"
                />
                <Path
                    d="M102.867 183.642v-.169c0-.127-.17-.127-.17 0v.169c0 .128.17.128.17 0z"
                    fill="#F99192"
                />
                <Path
                    d="M122.976 125.903c.339 0 .636 0 .975-.085zM125.054 118.394c.297 0 .637.042.891.17 1.782.763 1.655 2.884.976 4.412-.551 1.272-1.612 2.503-3.012 2.842-.042-.806-.509-2.333-1.951-4.879-.255-.424.466-1.188.678-1.442.637-.679 1.528-1.103 2.418-1.103z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M125.606 120.727c-.127-.085-.212-.127-.339-.127-.085 0-.128 0-.213.042-.127.043-.254.128-.339.17-.212.127-.382.339-.509.552-.255.381-.382.806-.509 1.272a.404.404 0 00.254.467c.213.042.382-.042.467-.255.043-.169.085-.339.17-.509 0-.042.042-.084.042-.127v-.042c0-.043 0-.085 0 0 0-.085.085-.17.127-.255.043-.085.085-.127.128-.212.042-.042-.043.042 0 0 0 0 0-.042.042-.042.043-.043.043-.085.085-.128l.085-.085c-.043.043-.043.043-.043 0h.043s.042 0 .042-.042c.043 0 .085-.042.128-.085.042-.042-.085 0 0 0h-.043c.085 0 .043 0-.127-.085.085.043.127.128.254.128.085 0 .213-.043.255-.128.127-.127.17-.424 0-.509z"
                    fill="#9B7872"
                />
                <Path
                    d="M111.309 123.442c0-.042.042-.084.085-.127.382-.509.933-.382 1.485-.212-.255.679-.509 1.4-.764 2.079a1.5 1.5 0 01-.848-.764 1.124 1.124 0 01.042-.976z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M115.764 125.012a2.47 2.47 0 01-1.188.891c-.467.127-.255.849.212.721.679-.212 1.23-.636 1.654-1.23.213-.382-.424-.764-.678-.382z"
                    fill="#3A3144"
                />
                <Path
                    d="M97.521 186.4c-3.69-1.273-10.054-2.545-12.303 2.885-3.267 7.848 6.533 10.988 6.533 10.988l13.449 1.4-3.818-11.794a6.517 6.517 0 00-3.86-3.479z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M80.212 185.042c2.079.976 4.2 1.782 6.406 2.334 2.206.551 4.497.891 6.746.975 1.23.043 2.46.043 3.648-.042.382 0 .764-.127 1.018-.424.255-.255.424-.679.424-1.018 0-.382-.127-.764-.424-1.019-.254-.254-.636-.466-1.018-.424-1.697.127-3.394.085-5.048-.042-.467-.043-.976-.085-1.443-.17.127 0 .255.042.382.042a33.134 33.134 0 01-6.449-1.527 30.142 30.142 0 01-1.781-.679c.127.043.254.085.34.128-.468-.212-.892-.382-1.359-.594a.849.849 0 00-.551-.17 1.416 1.416 0 00-.594 0c-.34.085-.721.339-.89.679-.17.339-.255.763-.128 1.145.17.297.424.637.721.806zM77.582 188.776c1.442.509 2.927 1.018 4.412 1.442 1.485.424 2.97.849 4.497 1.146.848.212 1.697.381 2.588.509.212.042.382.085.594 0 .212 0 .382-.085.551-.17.297-.17.594-.509.679-.891.085-.382.085-.764-.127-1.145-.212-.297-.51-.594-.891-.679a79.063 79.063 0 01-4.54-1.018 87.556 87.556 0 01-4.454-1.273c-.849-.255-1.655-.552-2.46-.849-.213-.042-.383-.084-.595 0-.212 0-.382.085-.551.17-.297.17-.594.509-.679.891-.085.382-.085.764.127 1.145.085.085.127.213.255.297.127.213.34.34.594.425zM77.71 193.358a113.13 113.13 0 006.193 1.697l1.782.381c.382.085.763.043 1.145-.127.297-.17.594-.509.68-.891.084-.382.084-.763-.128-1.145-.212-.297-.51-.594-.891-.679-2.079-.467-4.2-.976-6.237-1.57-.593-.169-1.145-.339-1.739-.509-.382-.127-.806-.042-1.145.127-.297.17-.594.509-.68.891-.084.382-.084.764.128 1.146.255.339.51.551.891.679zM79.66 197.77c1.019.297 2.08.594 3.14.891.764.212 1.527.466 2.333.678 1.188.297 2.419.509 3.649.637 1.273.169 2.545.254 3.776.339.212 0 .381-.042.551-.127.17-.043.34-.17.467-.297.254-.255.424-.679.424-1.018 0-.382-.127-.764-.424-1.018-.085-.085-.212-.128-.297-.255a1.432 1.432 0 00-.721-.212c-1.358-.127-2.758-.212-4.116-.382.128 0 .255.042.382.042-.848-.127-1.697-.254-2.503-.466-.636-.127-1.273-.34-1.909-.552-1.06-.297-2.121-.636-3.182-.891-.254-.084-.509-.127-.763-.212-.382-.127-.806-.042-1.146.128-.297.169-.594.509-.679.89-.084.382-.084.764.128 1.146.212.297.509.551.89.679z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M88.909 183.685c.764.509 1.485.976 2.206 1.527a2.355 2.355 0 01-.382-.297c.467.339.891.721 1.315 1.103.255.212.552.467.849.636.382.213.764.382 1.188.552.34.127.721.297 1.06.424-.127-.042-.297-.127-.424-.169.636.254 1.23.594 1.782 1.018a2.35 2.35 0 01-.382-.297c.51.382.934.848 1.315 1.315-.085-.127-.17-.255-.297-.382a13.08 13.08 0 011.4 2.333c.128.213.255.382.467.51.17.169.382.254.636.339.255.085.509.085.722.042.254 0 .466-.085.678-.212.382-.254.722-.636.849-1.103 0-.169.042-.339.085-.509 0-.339-.085-.636-.255-.891a11.016 11.016 0 00-1.103-1.951c-.424-.594-.848-1.146-1.4-1.655-.764-.721-1.654-1.273-2.588-1.697-.509-.254-1.06-.424-1.612-.636.127.042.297.127.424.169-.381-.169-.763-.339-1.06-.593.127.084.254.169.382.297-.255-.213-.51-.467-.764-.679-.594-.509-1.188-.934-1.782-1.4-.467-.34-.933-.637-1.4-.934-.212-.127-.424-.212-.679-.212-.254-.042-.509-.042-.72.043-.255.042-.425.169-.637.339-.212.127-.34.297-.467.509-.212.424-.34.934-.17 1.4.043.127.128.297.17.424.127.255.34.51.594.637zM137.824 139.818l-23.885-.042h-.933c1.273 3.818 3.861 6.194 8.994 6.194 5.133 0 11.836-2.334 17.436-6.109-.509-.043-1.06-.043-1.612-.043z"
                    fill="#E1AB9F"
                />
                <Path
                    d="M148.091 157.636c0 1.4 12.812 17.819 9.97 37.631-2.843 19.812-60.073 0-60.073 0"
                    stroke="#FECD78"
                    strokeWidth={27.3137}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M93.024 154.242c.127 3.437.127 6.958.806 10.31.085.466.806.254.721-.213-.72-3.309-.678-6.745-.806-10.097 0-.466-.72-.466-.72 0zM80.042 142.745c-.085-1.442 0-2.927.34-4.369.085-.467-.594-.637-.721-.212a16.306 16.306 0 00-.382 4.539c.042.509.763.509.763.042zM140.158 190.133c5.472 1.273 10.903-.678 15.951-2.757.424-.17.255-.891-.212-.721-4.879 2.036-10.182 3.987-15.57 2.757-.466-.085-.636.594-.169.721z"
                    fill="#D18C3D"
                />
                <Path
                    d="M88.145 82.715c-.254.933-.466 1.867-.551 2.8-.042.382 0 .764 0 1.103.042.51 0 1.018-.043 1.485-.042.467 0 .89 0 1.358.043.551.043 1.103 0 1.654 0-.17.043-.34.085-.509-.042.424-.17.891-.34 1.273.043-.128.128-.297.17-.424-.212.509-.508.975-.848 1.4.085-.128.17-.255.297-.382-.551.72-1.23 1.357-1.951 1.951.933.127 1.909.255 2.842.382-.212-.382-.467-.806-.679-1.23-.382-.637-.721-1.273-1.103-1.91-.085-.127-.17-.296-.254-.466v1.824c.127-.212.297-.382.424-.594-.085.128-.17.255-.297.382a9.851 9.851 0 011.951-2.036c-.127.085-.254.17-.381.297.297-.212.594-.424.933-.594-.127.042-.297.127-.424.17.17-.085.382-.128.594-.17-.17 0-.34.042-.51.085h.382c-.17 0-.339-.043-.509-.085h.085c.255.085.51.085.721.042.255 0 .467-.085.68-.212.211-.127.38-.254.508-.467.17-.17.255-.381.34-.636a1.798 1.798 0 00-.17-1.4c-.255-.382-.636-.764-1.103-.848-.255-.043-.51-.085-.764-.085s-.509.042-.763.085c-.34.042-.68.212-1.019.381-.551.255-1.06.637-1.527 1.061-.806.679-1.442 1.485-2.079 2.333a1.882 1.882 0 00-.339.467c-.382.551-.297 1.273 0 1.824.212.382.467.806.679 1.23.382.637.72 1.273 1.103 1.91.085.127.17.297.254.466.17.255.382.51.637.637.212.127.424.212.678.212.255.042.51.042.722-.043.297-.085.594-.254.806-.466.509-.424 1.06-.891 1.527-1.4.467-.51.89-1.018 1.23-1.612.128-.212.212-.382.297-.594.128-.34.297-.637.382-.976.17-.51.212-1.018.255-1.527.042-.637 0-1.273 0-1.91v-.89c.042-.382.085-.764.042-1.103 0-.51-.085-.976-.042-1.443 0-.085 0-.17.042-.254 0 .17-.042.339-.085.509.085-.721.297-1.443.467-2.164.127-.467.042-.976-.17-1.4-.127-.212-.254-.382-.466-.509-.17-.17-.382-.255-.637-.34a1.797 1.797 0 00-1.4.17c-.212.34-.551.722-.679 1.188z"
                    fill="#E1AB9F"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    screenHeaderContainer: {
        width: width - 40,
        height: 140,
        borderRadius: 5,
        backgroundColor: "#0D6B75",
        alignSelf: "center",
        marginTop: 35,
        overflow: "hidden",
    },
    screenHeaderText: {
        marginTop: 16,
        marginLeft: 16,
        fontSize: 31,
        fontFamily: "SofiaProBlack",
        color: "#FFFAC5"
    },
    svg: {
        alignSelf: "flex-end",
        marginRight: -40,
        marginTop: -125,
    }
});

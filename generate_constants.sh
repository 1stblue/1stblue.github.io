#!/bin/bash

# 指定目标文件
output_file="./public/test-assets/constants.json"

# 获取目录下的所有文件（去除 constants.json 文件）
files=($(find ./public/test-assets -type f -not -name "constants.json" -exec basename {} \;))

# 构建 JSON 数组
json_data="{ \"connections\": ["
for file in "${files[@]}"; do
    filename=$(echo "$file" | sed 's/\.[^.]*$//')  # 去除文件后缀
    json_data+="\"$filename\","
done
json_data="${json_data%,}" # 去除末尾逗号
json_data+="] }"

# 写入 JSON 数据到目标文件
echo "$json_data" > "$output_file"

echo "constants.json 文件生成完成。"

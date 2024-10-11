import os

current_folder = os.getcwd()

# 遍历当前文件夹中的所有文件
for filename in os.listdir(current_folder):
    # 构建完整文件路径
    old_file_path = os.path.join(current_folder, filename)
    
    # 仅处理文件（忽略文件夹）
    if os.path.isfile(old_file_path):
        # 检查文件名中是否包含空格
        if " " in filename:
            # 将文件名中的空格替换为下划线
            new_filename = filename.replace(" ", "_")
            new_file_path = os.path.join(current_folder, new_filename)
            
            # 重命名文件
            os.rename(old_file_path, new_file_path)

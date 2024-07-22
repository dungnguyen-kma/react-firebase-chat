# Lama Dev Chat App Starter template

### Chạy dự án trên local

- Clone dự án và cài đặt package
```sh

### Các bước làm việc với git
#### Khi triển khai 1 task (Tạo merge request)
```
- Step 1: tạo branch mới: 
    git checkout -b branch [tên branch] 
- Step 2: lấy code mới nhất từ remote dev về local dev:
    git checkout dev
    git pull origin dev
- Step 3: add toàn bộ code mới:
    git checkout -
    git add .
- Step 4: Tạo commit với nội dung công việc và phải có nghĩa: 
    git commit -m"Show config data in admin page"
- Step 4: đồng bộ với code với nhánh dev (nếu bị conflict sẽ fix tại nhánh vừa tạo): 
    git rebase dev
- Step 5: Đẩy commit lên nhánh: 
    git push origin [branch mới]
* Những lưu ý khi Tạo merge request: 
[Normal] Xóa toàn bộ console.log khi làm code và kiểm tra cú pháp, quy tắt đặt tên có đề cập ở cuối trang
```

#### Một số lệnh git khác
- git stash: Khi đã sửa file và muốn lấy code mới nhất, có 2 cách để làm. Một là git add ., git commit để lưu code đã làm. Hai là dùng git stash để bỏ qua những file đã sửa và lưu tạm thời, rồi git pull để lấy code về. Để lấy code đã sửa trước đó chạy git stash pop.
- git cherry-pick 
- git reset --hard ID_COMMIT (reset lại về commit)
- git branch  (Chọn nhánh)
- git log   (Kiểm tra số lượng commit)
- git revert ID_COMMIT (Hoàn tác commmit)

### Quy tắc khi viết code
```
Sau đây là một số quy chuẩn đặt tên thường dùng trong dự án:
- Tên lớp đặt theo PascalCase, ví dụ: UserClass, CategoryClass…
- Tên hàm và phương thức sử dụng camelCase, ví dụ getUser, getCategory…
- Tên biến cũng sử dụng camelCase loginUser, categoryList…
- Tên hằng số thì đặc biệt, viết hoa hết và cách nhau bởi dấu gạch dưới DISCOUNT_PERCENT, LIMIT_RATE…
- Tên bảng, tên cột trong Database sử dụng underscore và sử dụng danh từ số nhiều, ví dụ bảng oauth_clients, oauth_refresh_tokens.


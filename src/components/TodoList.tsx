'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
  LinearProgress
} from '@mui/material';

interface TodoItem {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

const statusColors: Record<string, any> = {
  pending: 'default',
  'in-progress': 'primary',
  completed: 'success'
};

const priorityColors: Record<string, any> = {
  low: 'success',
  medium: 'warning',
  high: 'error'
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 从 API 路由获取数据
    const fetchData = async () => {
      try {
        const response = await fetch('/api/todo');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading todo data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  // 计算完成进度
  const completedCount = todos.filter(todo => todo.status === 'completed').length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          项目待办事项
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            完成进度: {completedCount}/{todos.length}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {Math.round(progress)}%
          </Typography>
        </Box>
      </Box>

      <List>
        {todos.map((todo) => (
          <ListItem 
            key={todo.id} 
            divider
            sx={{ 
              flexDirection: 'column', 
              alignItems: 'flex-start',
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <ListItemText 
                primary={
                  <Typography variant="h6" component="h3">
                    {todo.title}
                  </Typography>
                }
                secondary={todo.description}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip 
                  label={todo.status === 'in-progress' ? '进行中' : todo.status === 'completed' ? '已完成' : '待处理'} 
                  color={statusColors[todo.status]} 
                  size="small" 
                />
                <Chip 
                  label={todo.priority === 'high' ? '高优先级' : todo.priority === 'medium' ? '中优先级' : '低优先级'} 
                  color={priorityColors[todo.priority]} 
                  size="small" 
                />
              </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body2" color="text.secondary">
                截止日期: {todo.dueDate}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}